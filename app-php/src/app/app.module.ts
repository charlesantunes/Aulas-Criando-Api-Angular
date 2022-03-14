import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //4-criar automaticamente
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http'; //02-importar o HttpClientModule
import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  //01-cria um vínculo entre o Angular e o php p/ receber dados.
    FormsModule   //03- cria um vínculo entre o formulário do html e o typScript
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
