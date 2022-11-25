import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Maquinaria } from '../maquinaria';
import { MaquinariaService } from '../maquinaria.service';

@Component({
  selector: 'app-actualizar-maquinaria',
  templateUrl: './actualizar-maquinaria.component.html',
  styleUrls: ['./actualizar-maquinaria.component.css']
})
export class ActualizarMaquinariaComponent implements OnInit {

  idMaquinaria:number;
  maquinaria:Maquinaria = new Maquinaria();
  constructor(private maquinariasService:MaquinariaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idMaquinaria = this.route.snapshot.params['idMaquinaria'];
    this.maquinariasService.obtenerMaquinariaPorId(this.idMaquinaria).subscribe(dato =>{
      this.maquinaria = dato;
    },error => console.log(error));
  }

  irAlaListaDeMaquinarias(){
    this.router.navigate(['/maquinarias']);
    console.log('Maquinarias actualizado',`El Maquinaria ${this.maquinaria.nombreMaquinaria} ha sido actualizado con exito`,`success`);
  }

  onSubmitMaquinaria(){
    let validar = this.maquinaria;
    if (validar.serialMaquinaria == "" || validar.nombreMaquinaria == "" || validar.estadoMaquinaria == "" || validar.categoriaMaquinaria == "") {
      alert("Por favor digitar Serial, Nombre, Estado y Categoria de la maquinaria");
    } else if (validar.descripcionMaquinaria == "") {
      this.maquinaria.descripcionMaquinaria = "Sin descripción";
      this.maquinariasService.actualizarMaquinariaBackEnd(this.idMaquinaria,this.maquinaria).subscribe(dato => {
        this.irAlaListaDeMaquinarias();
      },error => console.log(error));
    } else {
      this.maquinariasService.actualizarMaquinariaBackEnd(this.idMaquinaria,this.maquinaria).subscribe(dato => {
        this.irAlaListaDeMaquinarias();
      },error => console.log(error));
    }
  }
}
