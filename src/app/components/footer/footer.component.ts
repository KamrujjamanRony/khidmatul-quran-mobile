import { Component, Input } from '@angular/core';
import { FontSizeService } from '../../features/services/font-size.service';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() link: any;
  
  constructor(private router: Router, private fontSizeService: FontSizeService) {}

  increaseFont(): void {
    this.fontSizeService.increaseFontSize();
  }

  decreaseFont(): void {
    this.fontSizeService.decreaseFontSize();
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.fontSizeService.resetFontSize(); // Reset font size on route change
      }
    });
  }

}
