import { Component, Input } from '@angular/core';

@Component({
  selector: 'P',
  standalone: true,
  imports: [],
  template: `
    <p class="text-xl md:text-xl py-1 text-gray-700 text-justify">{{text}}</p>
  `
})
export class PComponent {
  @Input() text!: any;
  // @Output() closeModal = new EventEmitter<void>();

  // closeThisModal(): void {
  //   this.closeModal.emit();
  // }

}