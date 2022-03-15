import { HttpClient } from '@angular/common/http';  //29-import do HttpClient, nº28
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; //30-adicionar esse import que lista todos os dados que contém no BD.
import { Curso } from './curso';  //inport do Curso do nº31

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //29-URL
  url = "http://localhost/api/php/";

  //30-Vetor
  vetor:Curso[] = []; //31-ERRO-esse vetor sempre com erro,vetor: Curso[]; , tentei resolver com vetor: Curso[] = [];

  constructor(private http: HttpClient) { } //28-configurando o acesso ao banco de dados

  //31-Método- obter todos os cursos
  obtercursos():Observable<Curso[]>{    //32-Observable permite listar todos os componentes da pasta php e fazer uma leitura de todas as linhas, assim tendo acesso ao idCurso, nomeCurso, valorCurso e adicionar esses elementos no vetor:Curso[]. nº31
    return this.http.get(this.url+"listar").pipe(    //33-vai no banco de dados e pega(GET) os dados, no caso, pega o listar.php, depois usar a função pipe() e criar um mapeamento dentro para trabalhar com as colunas dos dados. 
      map((res)=>{    //34-dentro do map precisa criar uma variavel com a reposta dos dados obtidos, escolhi o nome res, depois usa => para idenficar um json e dentro as informações
        this.vetor = res['cursos'];   //35-ERRO- o vetor vai receber as informações da variavel res.
        return this.vetor;
      })  
    )
  }
}
