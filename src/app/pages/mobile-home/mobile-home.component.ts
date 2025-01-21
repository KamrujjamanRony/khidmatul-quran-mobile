import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../components/shared/custom-button/custom-button.component';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-mobile-home',
  standalone: true,
  imports: [CustomButtonComponent, HeaderComponent],
  templateUrl: './mobile-home.component.html',
  styleUrl: './mobile-home.component.css'
})
export class MobileHomeComponent {

}
