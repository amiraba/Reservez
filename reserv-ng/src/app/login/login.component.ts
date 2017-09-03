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

  constructor(private loginService: LoginService,
              private router: Router,
              private dialog: MdDialog) { }

  ngOnInit() {
    this.dialog.closeAll();
    this.userCredentials=new UserCredentials();
  }

  login(){
    this.loginService.login(this.userCredentials);
  }



}
