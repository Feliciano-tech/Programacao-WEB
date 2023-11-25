import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nomesegurado: string = '';
  sexo: string = 'F';
  idade: number = 0;
  valorauto: number = 0;
  valorapolice: number = 0;
  
  Calcular()
  {
    if (this.sexo == 'M' && this.idade <=25) this.valorapolice = this.valorauto * 0.15;
    else if (this.sexo == 'M' && this.idade >25) this.valorapolice = this.valorauto * 0.1;
    else if (this.sexo == 'F') this.valorapolice = this.valorauto * 0.08;
  }
}
