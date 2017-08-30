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
  registrationProblem = false;

  constructor(private registerService: RegisterService, private router: Router, private loginService: LoginService,
              public appComponent: AppComponent) {
    this.client=new Client();
  }

  ngOnInit() {
    this.rForm = new FormGroup({
      'nom' : new FormControl ("", Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern("[a-zA-Z ]*"),
        Validators.required
      ])), // Le nom doit avoir au minimum 3 caractères alphabétiques
      'email' : new FormControl("",  Validators.compose([
          Validators.required,
          Validators.pattern("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")
        ])), // L'email n'est pas valide
      'password' : new FormControl("", Validators.compose([
          Validators.required,
          Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})"),
        ])),// Le mot de passe doit contenir au moins un 6 caractères dont un en majuscule, en minuscule, un chiffre et un caractère spécial
      'tel':  new FormControl("", Validators.compose([
          Validators.minLength(8),
          Validators.pattern("[0-9]+"),
        ]))// Le numéro de téléphone n'est pas valide
    });
  }

  register(){
    this.registerService.register(this.client).then( () => {
        setTimeout(() => {
          let userCredentials= new UserCredentials();
          userCredentials.email=this.client.email;
          userCredentials.password=this.client.password;
          var b= this.loginService.login(userCredentials);
          this.appComponent.connected= this.loginService.isLoggedIn();

          this.router.navigate(['']);
        }, 1000);
    }

    ).catch( () => {
        this.registrationProblem=true;
    });
  }

  onSubmit() {
      this.register();
  }

}
