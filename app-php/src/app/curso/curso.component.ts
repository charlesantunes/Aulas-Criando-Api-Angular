import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',  //página html interna
  styleUrls: ['./curso.component.css']  //stylo da página interna
})
export class CursoComponent implements OnInit {

  //URL base
  url = "http://localhost/api/php/";

  //Vetor dos Cursos  
  vetor: Curso[];

  //Instaciando o Objeto da classe Curso
  curso = new Curso();

  constructor(private curso_service:CursoService) { } 

  ngOnInit(){
  this.selecao(); 
  }

  cadastro(){
    this.curso_service.obtercursos(this.curso).subscribe(  
      (res:Curso[]) => {

        this.vetor = res;

        //Limpar os atributos
        this.curso.nomeCurso =  null;
        this.curso.valorCurso = null;

        //atualizar a lista
        this.selecao();
      }
    )  
  
  }

  selecao(){
    this.curso_service.obtercursos().subscribe(  
      (res:Curso[]) => {
        this.vetor = res;
      }
    )   
  }

  alterar(){
    this.curso_service.atualizaCurso(this.curso).subscribe(   
      (res) => {

        //atualizando vetor
        this.vetor=res;

        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;

        this.selecao();

      }
    )
  
  }

  remover(){
    this.curso_service.removerCurso(this.curso).subscribe(
      (res : Curso[])=> {
        this.vetor = res;

        this.curso.nomeCurso = null;   
        this.curso.valorCurso = null;   
      }
    )
  }

  //61-Selecionar ou exibir um curso específico 
  selecionarCurso(c:Curso){
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;
  }
  
}
