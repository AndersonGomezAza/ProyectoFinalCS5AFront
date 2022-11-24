import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImplementosComponent } from './implementos/implementos.component';
import { MaquinariaComponent } from './maquinaria/maquinaria.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarImplementoComponent } from './registrar-implemento/registrar-implemento.component';
import { RegistrarMaquinariaComponent } from './registrar-maquinaria/registrar-maquinaria.component';
import { RegistrarRutinaComponent } from './registrar-rutina/registrar-rutina.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { ActualizarImplementoComponent } from './actualizar-implemento/actualizar-implemento.component';
import { ActualizarMaquinariaComponent } from './actualizar-maquinaria/actualizar-maquinaria.component';
import { ActualizarRutinaComponent } from './actualizar-rutina/actualizar-rutina.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { RutinaComponent } from './rutina/rutina.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path : 'inicio', component:InicioComponent},
  {path : '', redirectTo:"/inicio", pathMatch:'full'},
  {path : 'implementos', component:ImplementosComponent},
  {path : 'maquinarias', component:MaquinariaComponent},
  {path : 'rutinas', component:RutinaComponent},
  {path : 'usuarios', component:UsuarioComponent},
  {path : 'implementos/registrar-implemento', component:RegistrarImplementoComponent},
  {path : 'maquinarias/registrar-maquinaria', component:RegistrarMaquinariaComponent},
  {path : 'rutinas/registrar-rutina', component:RegistrarRutinaComponent},
  {path : 'usuarios/registrar-usuario', component:RegistrarUsuarioComponent},
  {path : 'actualizar-implemento/:idImplemento', component:ActualizarImplementoComponent},
  {path : 'actualizar-maquinaria/:idMaquinaria', component:ActualizarMaquinariaComponent},
  {path : 'actualizar-rutina/:idRutina', component:ActualizarRutinaComponent},
  {path : 'actualizar-usuario/:numDocumento', component:ActualizarUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
