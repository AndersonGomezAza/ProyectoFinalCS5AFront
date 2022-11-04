import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ImplementosComponent } from './implementos/implementos.component';
import { MaquinariaComponent } from './maquinaria/maquinaria.component';
import { FormsModule } from '@angular/forms';
import { RegistrarImplementoComponent } from './registrar-implemento/registrar-implemento.component';
import { RegistrarMaquinariaComponent } from './registrar-maquinaria/registrar-maquinaria.component';
import { ActualizarImplementoComponent } from './actualizar-implemento/actualizar-implemento.component';
import { ActualizarMaquinariaComponent } from './actualizar-maquinaria/actualizar-maquinaria.component';
import { RegistrarRutinaComponent } from './registrar-rutina/registrar-rutina.component';
import { ActualizarRutinaComponent } from './actualizar-rutina/actualizar-rutina.component';
import { RutinaComponent } from './rutina/rutina.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SideBarComponent,
    ImplementosComponent,
    MaquinariaComponent,
    RegistrarImplementoComponent,
    RegistrarMaquinariaComponent,
    ActualizarImplementoComponent,
    ActualizarMaquinariaComponent,
    RegistrarRutinaComponent,
    ActualizarRutinaComponent,
    RutinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
