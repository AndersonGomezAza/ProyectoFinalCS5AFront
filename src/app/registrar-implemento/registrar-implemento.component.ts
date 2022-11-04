import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Implementos } from '../implementos';
import { ImplementosService } from '../implementos.service';

@Component({
  selector: 'app-registrar-implemento',
  templateUrl: './registrar-implemento.component.html',
  styleUrls: ['./registrar-implemento.component.css']
})
export class RegistrarImplementoComponent implements OnInit {

  implemento: Implementos = new Implementos();
  constructor(private implementoServicio:ImplementosService, private routerImplemento:Router) { }

  ngOnInit(): void {
  }

  onSubmitImplemento(){
    this.guardarImplemento();
  }

  guardarImplemento(){
    this.implementoServicio.registrarImplementosBackEnd(this.implemento).subscribe(dato => {
      this.retornarHaciaLaLista();
    },error => console.log(error));
  }

  retornarHaciaLaLista(){
    this.routerImplemento.navigate(['implementos']);
  }
}
