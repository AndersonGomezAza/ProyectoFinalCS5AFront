import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Maquinaria } from '../maquinaria';
import { MaquinariaService } from '../maquinaria.service';

@Component({
  selector: 'app-registrar-maquinaria',
  templateUrl: './registrar-maquinaria.component.html',
  styleUrls: ['./registrar-maquinaria.component.css']
})
export class RegistrarMaquinariaComponent implements OnInit {

  maquinaria: Maquinaria = new Maquinaria();

  constructor(private maquinariaServicio:MaquinariaService, private routerMaquinaria:Router) { }

  ngOnInit(): void {
  }

  onSubmitMaquinaria(){
    this.guardarMaquinaria();
  }

  guardarMaquinaria(){
    this.maquinariaServicio.registrarMaquinariasBackEnd(this.maquinaria).subscribe(dato => {
      this.retornarHaciaLaLista();
    },error => console.log(error));
  }

  retornarHaciaLaLista(){
    this.routerMaquinaria.navigate(['maquinaria']);
  }

}
