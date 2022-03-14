//05-comopente onde fica a regra de negócios, onde executa umas funcionalidades como eventos do click do mouse, teclado, inicialização... 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',  //06-app-curso é o nome da pagina para ser chamada pelo app.component.html e exibida no browser.
  templateUrl: './curso.component.html',  //página html interna
  styleUrls: ['./curso.component.css']  //stylo da página interna
})
export class CursoComponent implements OnInit {

  constructor() { } //executa alguma funcionalidade ou estancia um objeto

  ngOnInit(): void {  //ao iniciar a pagina pode executar uma ação.
  }

}
