import { Component } from '@angular/core';

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

  constructor(private loginService: LoginService, private router: Router) {


  }

  ngOnInit(): void {
    console.log(this.loginService.isLoggedIn());
    this.connected= this.loginService.isLoggedIn();
    this.router.events.subscribe((val) => {
      console.log("event");
      this.connected= this.loginService.isLoggedIn();
    });
  }

  logout(){
    this.loginService.logout();
  }
}
