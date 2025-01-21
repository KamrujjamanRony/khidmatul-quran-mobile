import { Component } from '@angular/core';
import { CustomButtonComponent } from '../../components/shared/custom-button/custom-button.component';
import { HeadingTextComponent } from "../../components/shared/heading-text/heading-text.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-zakat-menu',
  standalone: true,
  imports: [CustomButtonComponent, HeadingTextComponent, FooterComponent],
  templateUrl: './zakat.component.html',
  styleUrl: './zakat.component.css'
})
export class ZakatMenuComponent {

}
