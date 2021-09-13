import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { ListadiscService } from './listadisc.service';
import { NotasComponent } from './notas/notas.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'disc', component: DisciplinasComponent },
      { path: 'nota', component: NotasComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    DisciplinasComponent,
    NotasComponent
  ],
  bootstrap: [AppComponent],
  providers: [ListadiscService]
})
export class AppModule {}
