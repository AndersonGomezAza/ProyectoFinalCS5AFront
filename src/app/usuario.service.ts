import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URLBase = "http://localhost:8080/usuario";
  constructor(private httpClient: HttpClient) { };

  //Metodo que nos sirve para obtener la lista de Usuarios del backend
  obtenerUsuarioBackEnd():Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.URLBase}`);
  }

  obtenerUsuarioPorId(numDocumento:number):Observable<Usuario>{
    console.log(this.httpClient.get<Usuario>(`${this.URLBase}/${numDocumento}`));
    return this.httpClient.get<Usuario>(`${this.URLBase}/${numDocumento}`);
  }

  //Metodo que nos sirve para guardar un Usuarios del fronend y enviarlo al backend
  registrarUsuarioBackEnd(Usuario: Usuario):Observable<Object>{
    return this.httpClient.post(`${this.URLBase}`, Usuario);
  }

  actualizarUsuarioBackEnd(numDocumento:number, Usuario:Usuario):Observable<Object>{
    return this.httpClient.put(`${this.URLBase}/${numDocumento}`,Usuario);
  }

  eliminarUsuarioBackEnd(numDocumento: number):Observable<Object>{
    return this.httpClient.delete(`${this.URLBase}/${numDocumento}`);
  }

}
