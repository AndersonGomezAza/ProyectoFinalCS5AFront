import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  role = '';
  user = '';

  constructor(private KeycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.ponerDatos();
    this.funcionalidadesRol();
  }

  ponerDatos():void {
    this.role = this.KeycloakService.getKeycloakInstance().realmAccess?.roles[0] + ""
    this.user = this.KeycloakService.getKeycloakInstance().profile?.firstName + "";
  }

  funcionalidadesRol():void {
    var cards = document.getElementsByClassName("card-list-a") as HTMLCollectionOf<Element>;
    for (let i = 0; i < cards.length; i++) {
      if (this.role == "Usuario") {
        if (cards[i].classList[1] == "administrador") {
          cards[i].classList.remove("link-block-sidebar");
        }else if (cards[i].classList[1] == "entrenador" ) {
          cards[i].classList.remove("link-block-sidebar");
        }
      } else if (this.role == "Entrenador") {
        if (cards[i].classList[1] == "administrador") {
          cards[i].classList.remove("link-block-sidebar");
        }
      }
    }
  }
}
