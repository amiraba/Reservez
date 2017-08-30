import { Component, OnInit } from '@angular/core';
import { Client } from '../_models/Client';
import {RegisterService} from "../_services/register.service";
import { Router, ActivatedRoute } from '@angular/router';
import {AppComponent} from "../app.component";
import {LoginService} from "../_services/login.service";
import {UserCredentials} from "../_models/UserCredentials";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  client;
  rForm;

  constructor(private registerService: RegisterService, private router: Router, private loginService: LoginService,
              public appComponent: AppComponent,) {
    this.client=new Client();
  }

  ngOnInit() {
    this.rForm = new FormGroup({
      'nom' : new FormControl ("", Validators.compose([ Validators.minLength(30), Validators.maxLength(500)] )),
      'email' : new FormControl("", Validators.required),
      'password' : new FormControl("", Validators.required),
      'tel':  new FormControl("")
    });
  }

  register(){
    this.registerService.register(this.client);
    setTimeout(() => {
      let userCredentials= new UserCredentials();
      userCredentials.email=this.client.email;
      userCredentials.password=this.client.password;
      var b= this.loginService.login(userCredentials);
      this.appComponent.connected= this.loginService.isLoggedIn();

      this.router.navigate(['']);
      }, 1000);
  }

  onSubmit() {
      console.log("*** Form Submitted! "+"this.registerForm.valid: "+this.rForm.valid);
      this.register();
  }

}
