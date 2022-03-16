import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { Curso } from './curso';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = "http://localhost/api/php/";

  vetor:Curso[];

  constructor(private http: HttpClient) { }

   obtercursos():Observable<Curso[]>{    
    return this.http.get(this.url+'listar').pipe( 
      map((res)=>{
        this.vetor = res['cursos'];
        return this.vetor;
      })  
    )    
  }

  cadastrarCursos(c:Curso):Observable<Curso[]>{
    return this.http.post(this.url+'cadastrar',{cursos:c}).pipe( 
      map((res)=>{
        this.vetor.push(res['cursos']);
        return this.vetor;
      })
    )
  }
  
  //Excluir curso
  removerCurso(c: Curso): Observable<Curso[]>{

    const params = new HttpParams().set("idCurso", c.idCurso?.toString());
    
    return this.http.delete(this.url+'excluir', {params: params})
    .pipe(map((res) =>{

      const filtro = this.vetor.filter((curso)=> {    //filtro é para filtrar o curso do php
        return +curso['idCurso'] !== +c.idCurso;      //filtra o curso do php e verifica se é diferente do curso a ser excluido
      })

      return this.vetor = filtro;

    }))

  }

  //Atualizar Curso
  atualizaCurso(c: Curso): Observable<Curso[]>{

    //Execultando a alteração via URL
    return this.http.put(this.url+'alterar', {cursos:c})    //Esse cursos é o json da pasta curso do php.
    
    .pipe(map((res) => {
      const cursoAlterado = this.vetor.find((item) => {   //68-find() é uma função de procurar, no caso o item
        return +item['idCurso'] === +['idCurso'];
      });

      //Quando encontrar o id p/ alterar, altera o valor do vetor local
      if (cursoAlterado) {
        cursoAlterado['nomeCurso'] = c['nomeCurso'];
        cursoAlterado['valorCurso'] = c['valorCurso'];        
      }

      return this.vetor;
    }))
  }

}
