import { Component, inject } from '@angular/core';
import { AudioCardComponent } from '../../../components/shared/audio-card/audio-card.component';
import { BoyanService } from '../../../features/services/boyan.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CoverComponent } from "../../../components/shared/cover/cover.component";
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environments';
import { FormsModule } from '@angular/forms';
import { NetStatusComponent } from '../../../components/shared/net-status/net-status.component';
import { NetworkStatusService } from '../../../features/services/network-status.service';
import { CustomButtonComponent } from '../../../components/shared/custom-button/custom-button.component';
import { ScrollComponent } from "../../../components/scroll/scroll.component";
import { HeadingTextComponent } from "../../../components/shared/heading-text/heading-text.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
    selector: 'app-audio',
    standalone: true,
    templateUrl: './audio.component.html',
    styleUrl: './audio.component.css',
    imports: [AudioCardComponent, CoverComponent, CommonModule, FormsModule, NetStatusComponent, CustomButtonComponent, ScrollComponent, HeadingTextComponent, FooterComponent]
})
export class AudioComponent {
  boyanService = inject(BoyanService);
  route = inject(ActivatedRoute);
  networkStatusService = inject(NetworkStatusService);
  isOnline!: boolean;
  title:any;
  isAuthorized: boolean = false;
  pass: string = "";
  err: string = '';
  allBoyan$?: Observable<any[]>;
  paramsSubscription?: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.networkStatusService.onlineStatus$.subscribe(
      (status: boolean) => this.isOnline = status
    );
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        const type = params.get('type');
        switch (type) {
          case "1":
            this.title = "কুরআনের তাফসীর";
            break;
          case "2":
            this.title = "সংক্ষিপ্ত নসিয়ত";
            break;
          case "3":
            this.title = "ইসলাহী মজলিশ";
            break;
          default:
            this.title = "ইউটিউব অডিও";
        }
        if (type) {
          this.allBoyan$ = this.boyanService.getBoyanByType(type);
        }
      },
    });
  }

  onSubmitAuth(data: any): void {
    this.pass === environment.viewKey ? this.isAuthorized = true : this.err = "Please enter correct password";
  }

  sortItems(data: any = []): any {
    if (data) {
      if (data?.length === 0) {
        return data;
      }

      return data.sort((a: any, b: any) => a.serial
        - b.serial
      );
    }
  }

  onDownload(arg0: any) {
  throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

}
