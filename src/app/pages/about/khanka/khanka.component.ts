import { Component } from '@angular/core';
import { Card1Component } from "../../../components/shared/text/card1";
import { ScrollComponent } from "../../../components/scroll/scroll.component";
import { HeadingTextComponent } from "../../../components/shared/heading-text/heading-text.component";
import { CustomButtonComponent } from "../../../components/shared/custom-button/custom-button.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
    selector: 'app-khanka',
    standalone: true,
    templateUrl: './khanka.component.html',
    styleUrl: './khanka.component.css',
    imports: [Card1Component, ScrollComponent, HeadingTextComponent, CustomButtonComponent, FooterComponent]
})
export class KhankaComponent {

}
