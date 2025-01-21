import { Component, Input } from '@angular/core';
import { CustomButtonComponent } from "../custom-button/custom-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heading-text',
  standalone: true,
  imports: [CustomButtonComponent, CommonModule],
  templateUrl: './heading-text.component.html',
  styleUrl: './heading-text.component.css'
})
export class HeadingTextComponent {
  @Input() Construction: any;
  @Input() link: any;
  @Input() color: any;

}
