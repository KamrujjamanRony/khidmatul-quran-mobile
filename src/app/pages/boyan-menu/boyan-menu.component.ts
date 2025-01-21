import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../components/shared/custom-button/custom-button.component';
import { HeadingTextComponent } from "../../components/shared/heading-text/heading-text.component";

@Component({
  selector: 'app-boyan-menu',
  standalone: true,
  imports: [CustomButtonComponent, HeadingTextComponent],
  templateUrl: './boyan-menu.component.html',
  styleUrl: './boyan-menu.component.css'
})
export class BoyanMenuComponent {

}
