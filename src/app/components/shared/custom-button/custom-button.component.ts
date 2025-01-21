import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {
  @Input() title: any;
  @Input() link: any;
  @Input() web: any;
  @Input() isSmall: boolean = false;
  @Input() isBack: boolean = false;

}
