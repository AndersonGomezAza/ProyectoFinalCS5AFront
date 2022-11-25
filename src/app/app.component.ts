import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoGYM';

  user = '';  role = '';
  dia: Date; fechaActual:Date; hora = 0; min = 0; seg = 0;
  constructor(private KeycloakService: KeycloakService, private router: Router) { }

  ngOnInit(): void {
    this.ponerDatos();
    this.mostrarFecha();
    this.irArriba();
  }

  logout():void{
    this.KeycloakService.logout();
  }

  ponerDatos(): void {
    this.role = this.KeycloakService.getKeycloakInstance().realmAccess?.roles[0] + " ";
    this.user = this.KeycloakService.getKeycloakInstance().profile?.firstName +  " " + this.KeycloakService.getKeycloakInstance().profile?.lastName;
  }

  mostrarFecha(): void {
    setInterval(()=>{
      this.fechaActual = new Date();
      this.dia = new Date(); 
      this.seg = this.fechaActual.getSeconds();
      this.hora = this.fechaActual.getHours();
      this.min= this.fechaActual.getMinutes();
    },1000);
  }

  irArriba():void {
    let boton = document.querySelector('.ir-arriba') as HTMLElement;

    document.addEventListener("scroll",()=>{
      if (window.scrollY > 250) {
        boton.style.display = 'block';
      } else{
        boton.style.display = 'none';
      }
    });

    boton.addEventListener("click", () => {
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    });
    
  }
}
