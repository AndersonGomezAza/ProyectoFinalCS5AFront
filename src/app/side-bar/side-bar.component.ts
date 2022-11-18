import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  role = '';
  user = '';
  constructor(private KeycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.ponerDatos();
  }
  logout():void{
    this.KeycloakService.logout();
  }

  ponerDatos():void {
    this.role = this.KeycloakService.getKeycloakInstance().realmAccess?.roles[0] + ""
    this.user = this.KeycloakService.getKeycloakInstance().profile?.firstName + "";
  }

}
