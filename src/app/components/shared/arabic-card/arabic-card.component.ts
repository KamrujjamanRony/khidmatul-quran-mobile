import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-arabic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arabic-card.component.html',
  styleUrl: './arabic-card.component.css'
})
export class ArabicCardComponent {
  @Input() data: any;
  @Input() index: any;
  @Input() isPlay: boolean = false;
  @Input() selectedArabic: boolean = false;
  @Input() selectedBangla: boolean = false;
  @Input() selectedDescribe: boolean = false;
  @Input() isExpanded: boolean = false;
  @Input() isHidePlay: boolean = false;

  @Output() expand = new EventEmitter<number>();

  toggleExpand() {
    this.expand.emit(this.index);
    this.stopPlay();
  }

  togglePlay(event: Event, index: number) {
    event.stopPropagation();  // This prevents the event from bubbling up to the parent
    const player = document.getElementById(`player-${index}`) as HTMLAudioElement;
    if (this.isPlay) {
      player?.pause();
    } else {
      player?.play();
    }
    this.isPlay = !this.isPlay;
  }

  stopPlay() {
    for (let i = 0; i < 40; i++) {
      const player = document.getElementById(`player-${i}`) as HTMLAudioElement;
      player?.pause();
      this.isPlay = false;
    }

  }

}
