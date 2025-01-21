import { Component, inject } from '@angular/core';
import { VideoCardComponent } from '../../../components/shared/video-card/video-card.component';
import { BoyanService } from '../../../features/services/boyan.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CoverComponent } from '../../../components/shared/cover/cover.component';
import { NetworkStatusService } from '../../../features/services/network-status.service';
import { NetStatusComponent } from '../../../components/shared/net-status/net-status.component';
import { CustomButtonComponent } from '../../../components/shared/custom-button/custom-button.component';
import { ScrollComponent } from "../../../components/scroll/scroll.component";
import { HeadingTextComponent } from "../../../components/shared/heading-text/heading-text.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
    selector: 'app-video',
    standalone: true,
    templateUrl: './video.component.html',
    styleUrl: './video.component.css',
    imports: [VideoCardComponent, CoverComponent, CommonModule, NetStatusComponent, CustomButtonComponent, ScrollComponent, HeadingTextComponent, FooterComponent]
})
export class VideoComponent {
  boyanService = inject(BoyanService);
  allBoyan$?: Observable<any[]>;
  networkStatusService = inject(NetworkStatusService);
  isOnline!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.networkStatusService.onlineStatus$.subscribe(
      (status: boolean) => this.isOnline = status
    );
    console.log(this.isOnline)
    this.allBoyan$ = this.boyanService.getBoyanByVideo();
    // this.allBoyan$.subscribe(boyan => {console.log(boyan)});
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

}
