import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  //vínculo entre o Angular e o php p/ receber dados.
    FormsModule   //vínculo entre o formulário do html e o typScript
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
