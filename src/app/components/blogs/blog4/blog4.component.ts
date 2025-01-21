import { Component } from '@angular/core';
import { Card1Component } from "../../shared/text/card1";
import { PComponent } from '../../shared/text/P';
import { CustomButtonComponent } from '../../shared/custom-button/custom-button.component';
import { HeadingTextComponent } from "../../shared/heading-text/heading-text.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
    selector: 'app-blog4',
    standalone: true,
    templateUrl: './blog4.component.html',
    styleUrl: './blog4.component.css',
    imports: [Card1Component, PComponent, CustomButtonComponent, HeadingTextComponent, FooterComponent]
})
export class Blog4Component {

}
