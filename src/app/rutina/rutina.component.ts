import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rutina } from '../rutina';
import { RutinaService } from '../rutina.service';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent implements OnInit {

  rutina: Rutina[];
  constructor(private RutinaServicio: RutinaService, private routerRutina:Router) { }

  ngOnInit(): void {
    this.obtenerRutina();
  }

  private obtenerRutina(){
    this.RutinaServicio.obtenerRutinaBackEnd().subscribe(dato => {
      this.rutina = dato;
    })
  }

  actualizarRutina(idrutina:number){
    this.routerRutina.navigate(['actualizar-rutina',idrutina]);
  }

  eliminarRutina(idrutina:number){
    location.reload();
    this.RutinaServicio.eliminarRutinaBackEnd(idrutina).subscribe(dato =>{
      this.obtenerRutina();
    });
  }

}
