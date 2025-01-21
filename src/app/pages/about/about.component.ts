import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../environments/environments';
import { CustomButtonComponent } from '../../components/shared/custom-button/custom-button.component';
import { ScrollComponent } from "../../components/scroll/scroll.component";
import { HeadingTextComponent } from "../../components/shared/heading-text/heading-text.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CustomButtonComponent, ScrollComponent, HeadingTextComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.google.com/maps?q=${environment.location}&t=&z=13&ie=UTF8&iwloc=&output=embed`);
   }

}
