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
    this.funcionalidadesRol();
    this.sideBar(); 
  }

  logout():void{
    this.KeycloakService.logout();
  }

  ponerDatos():void {
    this.role = this.KeycloakService.getKeycloakInstance().realmAccess?.roles[0] + ""
    this.user = this.KeycloakService.getKeycloakInstance().profile?.firstName + "";
  }

  funcionalidadesRol():void {
    var links = document.getElementsByClassName("nav-link") as HTMLCollectionOf<Element>;
    for (let i = 0; i < links.length; i++) {
      if (this.role == "Usuario") {
        if (links[i].classList[1] == "administrador") {
          links[i].classList.remove("link-block-sidebar");
        }else if (links[i].classList[1] == "entrenador" ) {
          links[i].classList.remove("link-block-sidebar");
        }
      } else if (this.role == "Entrenador") {
        if (links[i].classList[1] == "administrador") {
          links[i].classList.remove("link-block-sidebar");
        }
      }
    }
  }

  sideBar():void {
    const body = document.querySelector('body') as HTMLBodyElement,
    sidebar = body.querySelector('nav') as HTMLElement,
    toggle = body.querySelector(".toggle") as Element,
    modeSwitch = body.querySelector(".toggle-switch") as Element,
    modeText = body.querySelector(".mode-text") as HTMLElement;

    toggle.addEventListener("click" , () =>{
        sidebar.classList.toggle("close");
    })
    
    modeSwitch.addEventListener("click" , () =>{
        body.classList.toggle("dark");
        
        if(body.classList.contains("dark")){
          modeText.innerText = 'Light mode';
        }else{
          modeText.innerText = 'Dark mode';
        }
    });
  }
}
