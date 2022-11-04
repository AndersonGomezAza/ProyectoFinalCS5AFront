import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Implementos } from './implementos';

@Injectable({
  providedIn: 'root'
})
export class ImplementosService {

  private URLBase = "http://localhost:8080/implemento";
  constructor(private httpClient: HttpClient) { };

  //Metodo que nos sirve para obtener la lista de implementos del backend
  obtenerImplementosBackEnd():Observable<Implementos[]>{
    return this.httpClient.get<Implementos[]>(`${this.URLBase}`);
  }

  obtenerImplementosPorId(idImplemento:number):Observable<Implementos>{
    console.log(this.httpClient.get<Implementos>(`${this.URLBase}/${idImplemento}`));
    return this.httpClient.get<Implementos>(`${this.URLBase}/${idImplemento}`);
  }

  //Metodo que nos sirve para guardar un implementos del fronend y enviarlo al backend
  registrarImplementosBackEnd(implemento: Implementos):Observable<Object>{
    return this.httpClient.post(`${this.URLBase}`, implemento);
  }

  actualizarImplementoBackEnd(idImplemento:number, implemento:Implementos):Observable<Object>{
    return this.httpClient.put(`${this.URLBase}/${idImplemento}`,implemento);
  }

  eliminarImplementoBackEnd(idImplemento: number):Observable<Object>{
    return this.httpClient.delete(`${this.URLBase}/${idImplemento}`);
  }
}
