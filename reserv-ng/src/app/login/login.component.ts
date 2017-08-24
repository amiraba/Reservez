import { Component, OnInit } from '@angular/core';
import {LoginService} from "../_services/login.service";
import {UserCredentials} from "../_models/UserCredentials";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCredentials;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.userCredentials=new UserCredentials();
  }

  login(){
    this.loginService.login(this.userCredentials);

  }

}
