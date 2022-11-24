import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private usuarioServicio:UsuarioService, private routerUsuario:Router) { }

  ngOnInit(): void {
  }

  onSubmitUsuario(){
    let validar = this.usuario;
    if (validar.numDocumento == null || validar.tipoDoc == null || validar.nombres == null || validar.fechaRegistro == null || validar.rol == null) {
      alert("Por favor digitar Numero de documento, Tipo de documento, Nombres, Fecha de registro y rol del Usuario");
    } else {
      this.guardarUsuario();
    }
  }

  guardarUsuario(){
    this.usuarioServicio.registrarUsuarioBackEnd(this.usuario).subscribe(dato => {
      this.retornarHaciaLaLista();
    },error => console.log(error));
  }

  retornarHaciaLaLista(){
    this.routerUsuario.navigate(['usuarios']);
  }
}
