import { Component } from '@angular/core';
import { Card1Component } from "../../../components/shared/text/card1";
import { ScrollComponent } from "../../../components/scroll/scroll.component";
import { CustomButtonComponent } from "../../../components/shared/custom-button/custom-button.component";
import { HeadingTextComponent } from "../../../components/shared/heading-text/heading-text.component";
import { FooterComponent } from "../../../components/footer/footer.component";

@Component({
    selector: 'app-shayek',
    standalone: true,
    templateUrl: './shayek.component.html',
    styleUrl: './shayek.component.css',
    imports: [Card1Component, ScrollComponent, CustomButtonComponent, HeadingTextComponent, FooterComponent]
})
export class ShayekComponent {

}
