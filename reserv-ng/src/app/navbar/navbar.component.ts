import {ApplicationRef, Component, OnInit} from '@angular/core';
import {LoginService} from "../_services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  connected: boolean;

  cnx_seConnecter="Se connecter";
  cnx_creerUnCompte= "Créer un compte";
  cnx_deconnexion="Déconnexion";


  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.connected= this.loginService.isLoggedIn();
  }
  logout(){
    this.loginService.logout();
    this.connected= this.loginService.isLoggedIn();
    this.router.navigate(['']);
  }
}
