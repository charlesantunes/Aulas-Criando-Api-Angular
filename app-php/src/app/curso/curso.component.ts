//05-comopente onde fica a regra de negócios, onde executa umas funcionalidades como eventos do click do mouse, teclado, inicialização... 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',  //06-app-curso é o nome da pagina para ser chamada pelo app.component.html e exibida no browser.
  templateUrl: './curso.component.html',  //página html interna
  styleUrls: ['./curso.component.css']  //stylo da página interna
})
export class CursoComponent implements OnInit {
  //nome:string = 'Charles';  //10-testando a variável na página, teste será com o bind{{}} no curso.componente.html, apagar depois

  //Construtor
  constructor() { } //executa alguma funcionalidade ou estancia um objeto

  //inicializador do sistema
  ngOnInit(): void {  //ao iniciar a pagina pode executar uma ação.
    //alert("Olá, teste de inicialização"); //09-testando a função de inicialização, apagar depois.
  }

  //12-Cadastro
  cadastro():void{  //13-função com retorno(void)
    //alert("Olá, teste de Cadastro") //17-apenas para teste, apagar depois
  }

  //14-Seleção
  selecao():void{
    //alert("Olá, teste de Seleção")  //apenas para teste, apagar depois
  }

  //15-Alterar
  alterar():void{
    //alert("Olá, teste de Alterar")  //apenas para teste, apagar depois
  }
  
  //16-Remover
  remover():void{
    //alert("Olá, teste de Remover")  //apenas para teste, apagar depois
  }

}
