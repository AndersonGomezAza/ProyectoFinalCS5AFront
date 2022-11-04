import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rutina } from '../rutina';
import { RutinaService } from '../rutina.service';

@Component({
  selector: 'app-actualizar-rutina',
  templateUrl: './actualizar-rutina.component.html',
  styleUrls: ['./actualizar-rutina.component.css']
})
export class ActualizarRutinaComponent implements OnInit {

  idRutina:number;
  rutina:Rutina = new Rutina();
  constructor(private rutinasService:RutinaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idRutina = this.route.snapshot.params['idRutina'];
    this.rutinasService.obtenerRutinaPorId(this.idRutina).subscribe(dato =>{
      this.rutina = dato;
    },error => console.log(error));
  }

  irAlaListaDeRutinas(){
    this.router.navigate(['rutinas']);
    console.log('Rutinas actualizado',`El Rutina ${this.rutina.nombreRutina} ha sido actualizado con exito`,`success`);
  }

  onSubmitRutina(){
    this.rutinasService.actualizarRutinaBackEnd(this.idRutina,this.rutina).subscribe(dato => {
      this.irAlaListaDeRutinas();
    },error => console.log(error));
  }

}
