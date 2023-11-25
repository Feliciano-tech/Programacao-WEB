import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ac1: number = 0;
  ac2: number = 0;
  ag: number = 0;
  af: number = 0;
  result: number = 0;
  
  CalcularMedia()
  {
    this.result = (this.ac1* 0.15)+(this.ac2*0.30)+(this.ag*0.10)+(this.af*0.45);
  }
}
