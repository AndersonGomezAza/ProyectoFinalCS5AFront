import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Maquinaria } from '../maquinaria';
import { MaquinariaService } from '../maquinaria.service';

@Component({
  selector: 'app-maquinaria',
  templateUrl: './maquinaria.component.html',
  styleUrls: ['./maquinaria.component.css']
})
export class MaquinariaComponent implements OnInit {

  maquinarias: Maquinaria[];
  constructor(private maquinariaServicio: MaquinariaService, private routerMaquinaria:Router) { }

  ngOnInit(): void {
    this.obtenerMaquinaria();
  }

  private obtenerMaquinaria(){
    this.maquinariaServicio.obtenerMaquinariasBackEnd().subscribe(dato => {
      this.maquinarias = dato;
    })
  }

  actualizarMaquinaria(idMaquinaria:number){
    this.routerMaquinaria.navigate(['actualizar-maquinaria',idMaquinaria]);
  }

  eliminarMaquinaria(idMaquinaria:number){
    location.reload();
    this.maquinariaServicio.eliminarMaquinariaBackEnd(idMaquinaria).subscribe(dato =>{
      this.obtenerMaquinaria();
    });
  }
}
