import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario[];
  constructor(private usuarioServicio: UsuarioService, private routerUsuario:Router) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  private obtenerUsuario(){
    this.usuarioServicio.obtenerUsuarioBackEnd().subscribe(dato => {
      this.usuario = dato;
    })
  }

  actualizarUsuario(numDocumento:number){
    this.routerUsuario.navigate(['actualizar-usuario',numDocumento]);
  }

  eliminarUsuario(numDocumento:number){
    location.reload();
    this.usuarioServicio.eliminarUsuarioBackEnd(numDocumento).subscribe(dato =>{
      this.obtenerUsuario();
    });
  }

}
