import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Implementos } from '../implementos';
import { ImplementosService } from '../implementos.service';

@Component({
  selector: 'app-actualizar-implemento',
  templateUrl: './actualizar-implemento.component.html',
  styleUrls: ['./actualizar-implemento.component.css']
})
export class ActualizarImplementoComponent implements OnInit {

  idImplemento:number;
  implemento:Implementos = new Implementos();
  constructor(private implementosService:ImplementosService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idImplemento = this.route.snapshot.params['idImplemento'];
    this.implementosService.obtenerImplementosPorId(this.idImplemento).subscribe(dato =>{
      this.implemento = dato;
    },error => console.log(error));
  }

  irAlaListaDeImplementos(){
    this.router.navigate(['/implementos']);
    console.log('Implementos actualizado',`El Implemento ${this.implemento.nombreImplemento} ha sido actualizado con exito`,`success`);
  }

  onSubmitImplemento(){
    this.implementosService.actualizarImplementoBackEnd(this.idImplemento,this.implemento).subscribe(dato => {
      this.irAlaListaDeImplementos();
    },error => console.log(error));
  }
}