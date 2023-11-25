import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ra: string = '';
  nome: string = '';
  email: string = '';
  celular: string = '';
  return: string = '';
  
  Cadastrar()
  {
    if (this.ra == '' || this.nome == '' || this.email == '' || this.celular == '') this.return = 'Preencha campo obrigatorio!';
    else this.return = 'Usuario cadastrado!';
  }
}
