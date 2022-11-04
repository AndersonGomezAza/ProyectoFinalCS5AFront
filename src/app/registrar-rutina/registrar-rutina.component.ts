import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rutina } from '../rutina';
import { RutinaService } from '../rutina.service';

@Component({
  selector: 'app-registrar-rutina',
  templateUrl: './registrar-rutina.component.html',
  styleUrls: ['./registrar-rutina.component.css']
})
export class RegistrarRutinaComponent implements OnInit {

  rutina: Rutina = new Rutina();

  constructor(private rutinaServicio:RutinaService, private routerRutina:Router) { }

  ngOnInit(): void {
  }

  onSubmitRutina(){
    this.guardarRutina();
  }

  guardarRutina(){
    this.rutinaServicio.registrarRutinaBackEnd(this.rutina).subscribe(dato => {
      this.retornarHaciaLaLista();
    },error => console.log(error));
  }

  retornarHaciaLaLista(){
    this.routerRutina.navigate(['rutinas']);
  }
}
