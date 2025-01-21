import { Component, OnInit } from '@angular/core';
import { CustomButtonComponent } from "../custom-button/custom-button.component";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  isOffline = false;

  ngOnInit(): void {
    // this.isOffline = navigator.onLine? false : true;
    setTimeout(() => {
      this.isOffline = true;
      console.log(this.isOffline);
    }, 35000);
  }

  onReload(){
    window.location.reload();
  }

}
