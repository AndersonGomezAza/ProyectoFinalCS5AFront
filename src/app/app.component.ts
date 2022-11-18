import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoGYM';

  user = '';

  constructor(private KeycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.ponerNombreUser();
  }

  ponerNombreUser(): void {
    this.user = this.KeycloakService.getKeycloakInstance().realmAccess?.roles[0] + " " + this.KeycloakService.getKeycloakInstance().profile?.firstName +  " " + this.KeycloakService.getKeycloakInstance().profile?.lastName;
  }

}
