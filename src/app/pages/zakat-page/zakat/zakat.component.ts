import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZakatService } from '../../../features/services/zakat.service';
import { BengaliDatePipe } from "../../../features/pipe/bengali-date.pipe";
import { BanglaPipe } from "../../../features/pipe/bangla.pipe";
import { LoadingComponent } from '../../../components/shared/loading/loading.component';
import { NetworkStatusService } from '../../../features/services/network-status.service';
import { NetStatusComponent } from '../../../components/shared/net-status/net-status.component';
import { CustomButtonComponent } from '../../../components/shared/custom-button/custom-button.component';
import { HeadingTextComponent } from "../../../components/shared/heading-text/heading-text.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-zakat',
  standalone: true,
  templateUrl: './zakat.component.html',
  styleUrl: './zakat.component.css',
  imports: [FormsModule, BengaliDatePipe, BanglaPipe, LoadingComponent, NetStatusComponent, CustomButtonComponent, HeadingTextComponent, FooterComponent]
})
export class ZakatComponent {
  forayez: any;
  ZakatService = inject(ZakatService);
  networkStatusService = inject(NetworkStatusService);
  isOnline!: boolean;
  asset: string = 'ভরি';

  constructor() { }

  ngOnInit(): void {
    this.networkStatusService.onlineStatus$.subscribe(
      (status: boolean) => this.isOnline = status
    );
    this.ZakatService.getZakat().subscribe(Response => {
      this.forayez = Response;
      // console.log(this.convertToBanglaNumber(this.forayez.gold21k, ""))
    })
  }

  calculatePrice(input: number, unit: string, type: string): string {
    const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

    let result: any;

    if (unit === "ভরি") {
      if (type === "ক্রয়") {
        result = (input * 11.664).toFixed(1);
      } else if (type === "বিক্রি") {
        result = (input * 11.664 * 0.8).toFixed(1);
      } else if (type === "যাকাত") {
        result = (input * 11.664 * 0.8 * 0.025).toFixed(1);
      }
    } else {
      if (type === "ক্রয়") {
        result = (input).toFixed(1);
      } else if (type === "বিক্রি") {
        result = (input * 0.8).toFixed(1);
      } else if (type === "যাকাত") {
        result = (input * 0.8 * 0.025).toFixed(1);
      }
    }
    
    return result.split('').map((digit: string) => 
      digit === '.' ? '.' : banglaDigits[parseInt(digit)]
    ).join('');
  }

}
