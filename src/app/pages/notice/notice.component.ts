import { Component } from '@angular/core';
import { HeadingTextComponent } from "../../components/shared/heading-text/heading-text.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [HeadingTextComponent, FooterComponent],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.css'
})
export class NoticeComponent {

}
