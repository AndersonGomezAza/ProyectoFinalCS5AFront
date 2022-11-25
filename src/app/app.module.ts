import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ImplementosComponent } from './implementos/implementos.component';
import { MaquinariaComponent } from './maquinaria/maquinaria.component';
import { RutinaComponent } from './rutina/rutina.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { RegistrarImplementoComponent } from './registrar-implemento/registrar-implemento.component';
import { RegistrarMaquinariaComponent } from './registrar-maquinaria/registrar-maquinaria.component';
import { RegistrarRutinaComponent } from './registrar-rutina/registrar-rutina.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { ActualizarImplementoComponent } from './actualizar-implemento/actualizar-implemento.component';
import { ActualizarMaquinariaComponent } from './actualizar-maquinaria/actualizar-maquinaria.component';
import { ActualizarRutinaComponent } from './actualizar-rutina/actualizar-rutina.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { ActivatedRoute } from '@angular/router';
import { PlanesComponent } from './planes/planes.component';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        realm: 'GYM ETITC CONTROL',
        url: 'http://localhost:9090/auth',
        clientId: 'angular-client'
      },
      initOptions: {
        onLoad: 'login-required',
        flow: 'standard',
      },
      loadUserProfileAtStartUp: true
    });
}

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
    RutinaComponent,
    UsuarioComponent,
    ActualizarUsuarioComponent,
    RegistrarUsuarioComponent,
    PlanesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
