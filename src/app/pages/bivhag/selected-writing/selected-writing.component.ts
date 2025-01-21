import { Component } from '@angular/core';
import { Card2Component } from '../../../components/shared/text/card2';
import { CustomButtonComponent } from '../../../components/shared/custom-button/custom-button.component';
import { ScrollComponent } from "../../../components/scroll/scroll.component";
import { HeadingTextComponent } from "../../../components/shared/heading-text/heading-text.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
  selector: 'app-selected-writing',
  standalone: true,
  imports: [Card2Component, CustomButtonComponent, ScrollComponent, HeadingTextComponent, FooterComponent],
  templateUrl: './selected-writing.component.html',
  styleUrl: './selected-writing.component.css'
})
export class SelectedWritingComponent {

}
