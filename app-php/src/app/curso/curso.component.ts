//05-comopente onde fica a regra de negócios, onde executa umas funcionalidades como eventos do click do mouse, teclado, inicialização... 
import { HttpClient } from '@angular/common/http';//23- importado com o comando HttpClient do nº22
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso'; //27- importado com a criação do curso[], nº26

@Component({
  selector: 'app-curso',  //06-app-curso é o nome da pagina para ser chamada pelo app.component.html e exibida no browser.
  templateUrl: './curso.component.html',  //página html interna
  styleUrls: ['./curso.component.css']  //stylo da página interna
})
export class CursoComponent implements OnInit {
  //nome:string = 'Charles';  //10-testando a variável na página, teste será com o bind{{}} no curso.componente.html, apagar depois

  //23-URL base
  url = "http://localhost/api/php/";  //24-colar o local onde está os componentes de conexão com o BD do php

  //25-Vetor dos Cursos
  //25-Vetor dos Cursos
  vetor: Curso[] = []; //-26 ERRO - o vetor usando colchetes armazena todos os dados da classe Curso do component curso.ts, os objetos do construtor.
   //-26 o vetor usando colchetes armazena todos os dados da classe Curso do component curso.ts, os objetos do construtor.

  //Construtor-executa alguma funcionalidade ou estancia um objeto
  constructor(private http:HttpClient) { } //22-confirando e encapsulando os dados de envio e consulta do BD, HttpClient foi adicionado no app.module.ts nº01

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
