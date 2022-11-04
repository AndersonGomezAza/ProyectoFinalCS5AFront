import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rutina } from './rutina';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {

  private URLBase = "http://localhost:8080/rutina";
  constructor(private httpClient: HttpClient) { };

  //Metodo que nos sirve para obtener la lista de Rutinas del backend
  obtenerRutinaBackEnd():Observable<Rutina[]>{
    return this.httpClient.get<Rutina[]>(`${this.URLBase}`);
  }

  obtenerRutinaPorId(idRutina:number):Observable<Rutina>{
    console.log(this.httpClient.get<Rutina>(`${this.URLBase}/${idRutina}`));
    return this.httpClient.get<Rutina>(`${this.URLBase}/${idRutina}`);
  }

  //Metodo que nos sirve para guardar un Rutinas del fronend y enviarlo al backend
  registrarRutinaBackEnd(Rutina: Rutina):Observable<Object>{
    return this.httpClient.post(`${this.URLBase}`, Rutina);
  }

  actualizarRutinaBackEnd(idRutina:number, Rutina:Rutina):Observable<Object>{
    return this.httpClient.put(`${this.URLBase}/${idRutina}`,Rutina);
  }

  eliminarRutinaBackEnd(idRutina: number):Observable<Object>{
    return this.httpClient.delete(`${this.URLBase}/${idRutina}`);
  }

}
