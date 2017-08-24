import { Component, OnInit } from '@angular/core';
import {LoginService} from "../_services/login.service";
import {UserCredentials} from "../_models/UserCredentials";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCredentials;
  returnUrl: string;

  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userCredentials=new UserCredentials();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(){
    var b= this.loginService.login(this.userCredentials);
    this.router.navigate([this.returnUrl]); //|| "?refresh=1"
  }



}
