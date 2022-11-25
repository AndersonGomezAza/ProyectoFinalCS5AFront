import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  numDocumento:number;
  usuario:Usuario = new Usuario();
  constructor(private usuarioServicio:UsuarioService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.numDocumento = this.route.snapshot.params['numDocumento'];
    this.usuarioServicio.obtenerUsuarioPorId(this.numDocumento).subscribe(dato =>{
      this.usuario = dato;
    },error => console.log(error));
  }

  irAlaListaDeUsuarios(){
    this.router.navigate(['/usuarios']);
    console.log('Usuarios actualizado',`El Usuario ${this.usuario.nombres} ha sido actualizado con exito`,`success`);
  }

  onSubmitUsuario(){
    let validar = this.usuario;
    console.log(validar);
    if (validar.tipoDoc == "" || validar.nombres == "" || validar.fechaRegistro.toString() == '' || validar.rol == "") {
      alert("Por favor digitar Numero de documento, Tipo de documento, Nombres, Fecha de registro y rol del Usuario");
    } else {
      this.usuarioServicio.actualizarUsuarioBackEnd(this.numDocumento,this.usuario).subscribe(dato => {
        this.irAlaListaDeUsuarios();
      },error => console.log(error));
    }
    
  }

}
