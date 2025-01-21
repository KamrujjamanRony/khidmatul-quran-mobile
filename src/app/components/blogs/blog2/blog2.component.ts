import { Component } from '@angular/core';
import { Head1Component } from '../../shared/text/H1';
import { PComponent } from '../../shared/text/P';
import { Card1Component } from '../../shared/text/card1';
import { CustomButtonComponent } from '../../shared/custom-button/custom-button.component';
import { HeadingTextComponent } from "../../shared/heading-text/heading-text.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-blog2',
  standalone: true,
  imports: [Head1Component, PComponent, Card1Component, CustomButtonComponent, HeadingTextComponent, FooterComponent],
  templateUrl: './blog2.component.html'
})
export class Blog2Component {

}
