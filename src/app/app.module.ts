import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaPerfilComponent } from './usuarios/vista-perfil/vista-perfil.component';
import { PerfilModificarComponent } from './perfil/perfil-modificar/perfil-modificar.component';
import { PerfilListadoComponent } from './perfil/perfil-listado/perfil-listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VistaPerfilComponent,
    PerfilModificarComponent,
    PerfilListadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
