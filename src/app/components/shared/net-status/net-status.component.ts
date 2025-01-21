import { Component } from '@angular/core';

@Component({
  selector: 'app-net-status',
  standalone: true,
  imports: [],
  templateUrl: './net-status.component.html',
  styleUrl: './net-status.component.css'
})
export class NetStatusComponent {

  onReload() {
    window.location.reload();
  }

}
