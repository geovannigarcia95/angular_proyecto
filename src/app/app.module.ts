import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListCitasComponent } from './list-citas/list-citas.component';
import { CrearCitaComponent } from './crear-cita/crear-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCitasComponent,
    CrearCitaComponent
  ],
  imports: [
    BrowserModule
    ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
