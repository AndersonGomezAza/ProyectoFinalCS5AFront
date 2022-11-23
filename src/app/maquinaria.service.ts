import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maquinaria } from './maquinaria';


@Injectable({
  providedIn: 'root'
})
export class MaquinariaService {

  private URLBase = "http://localhost:8080/maquinaria";
  constructor(private httpClient: HttpClient) { };

  obtenerMaquinariasBackEnd():Observable<Maquinaria[]>{
    console.log(this.httpClient.get<Maquinaria[]>(`${this.URLBase}`));
    return this.httpClient.get<Maquinaria[]>(`${this.URLBase}`);
  }

  obtenerMaquinariaPorId(idMaquinaria:number):Observable<Maquinaria>{
    console.log(this.httpClient.get<Maquinaria>(`${this.URLBase}/${idMaquinaria}`));
    return this.httpClient.get<Maquinaria>(`${this.URLBase}/${idMaquinaria}`);
  }

  //Metodo que nos sirve para guardar un Maquinaria del fronend y enviarlo al backend
  registrarMaquinariasBackEnd(maquinaria: Maquinaria):Observable<Object>{
    return this.httpClient.post(`${this.URLBase}`, maquinaria);
  }

  actualizarMaquinariaBackEnd(idMaquinaria:number, maquinaria:Maquinaria):Observable<Object>{
    return this.httpClient.put(`${this.URLBase}/${idMaquinaria}`,maquinaria);
  }

  eliminarMaquinariaBackEnd(idMaquinaria: number):Observable<Object>{
    return this.httpClient.delete(`${this.URLBase}/${idMaquinaria}`);
  }
}
