import {Component, OnChanges} from '@angular/core';
import { ApplicationRef   } from '@angular/core';
import { OffreResService } from './_services/offre-res.service';

import { OnInit } from '@angular/core';
import {LoginService} from "./_services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit{
  title = 'app';
  connected: boolean;

  cnx_seConnecter="Se connecter";
  cnx_creerUnCompte= "Créer un compte";
  cnx_deconnexion="Déconnexion";

  constructor(private loginService: LoginService, private router: Router , private applicationRef : ApplicationRef ) {
  }

  ngOnInit(): void {
    this.connected= this.loginService.isLoggedIn();
  }

  logout(){
    this.loginService.logout();
    this.connected= this.loginService.isLoggedIn();
    this.router.navigate(['']);

  }
  changeCnxStuff(){
    this.cnx_seConnecter="";
    this.cnx_creerUnCompte= "";
    this.cnx_deconnexion="Déconnexion";
  }
}
