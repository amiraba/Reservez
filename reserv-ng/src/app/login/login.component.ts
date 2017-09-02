import { Component, OnInit } from '@angular/core';
import {LoginService} from "../_services/login.service";
import {UserCredentials} from "../_models/UserCredentials";
import { Router, ActivatedRoute } from '@angular/router';
import {AppComponent} from "../app.component";
import {MdDialog} from "@angular/material";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCredentials;
  returnUrl: string;
  loginProblem= false;

  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router, public navbarComponent: NavbarComponent, private dialog: MdDialog) { }


  ngOnInit() {
    this.dialog.closeAll();
    this.userCredentials=new UserCredentials();
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(){
    console.log("in login component");
    var b= this.loginService.login(this.userCredentials)
    if (!b){
      this.loginProblem=true;
    }else{
      console.log("in login component / b==true");
      this.navbarComponent.connected= this.loginService.isLoggedIn();
      console.log("this.appComponent.connected= this.loginService.isLoggedIn();"+ this.navbarComponent.connected);
      this.router.navigate(['']);
      //this.router.navigate([this.returnUrl]); //|| "?refresh=1"

    }

  }



}
