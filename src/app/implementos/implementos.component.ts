import { Component, OnInit } from '@angular/core';
import { Implementos } from '../implementos';
import { ImplementosService } from '../implementos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-implementos',
  templateUrl: './implementos.component.html',
  styleUrls: ['./implementos.component.css']
})
export class ImplementosComponent implements OnInit {

  implementos: Implementos[];
  constructor(private implementosServicio: ImplementosService, private routerImplemento:Router) { }

  ngOnInit(): void {
    this.obtenerImplementos();
  }

  private obtenerImplementos(){
    this.implementosServicio.obtenerImplementosBackEnd().subscribe(dato => {
      this.implementos = dato;
    })
  }

  actualizarImplemento(idImplemento:number){
    this.routerImplemento.navigate(['actualizar-implemento',idImplemento]);
  }

  eliminarImplemento(idImplemento:number){
    location.reload();
    this.implementosServicio.eliminarImplementoBackEnd(idImplemento).subscribe(dato =>{
      this.obtenerImplementos();
    });
  }

}
