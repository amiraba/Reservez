import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Router} from "@angular/router";
import {AlertService} from "./alert.service";
import {UserCredentials} from "../_models/UserCredentials";
import {AppComponent} from "../app.component";

@Injectable()
export class LoginService {

  constructor(private http: Http, private alertService: AlertService, private router: Router) { }

  login(userCredentials: UserCredentials) {
    let headers= new Headers({
      'Content-Type': 'application/json',
    });
    const url='http://localhost:3000/api/clients/login';
    const jsonObject= JSON.stringify({ email: userCredentials.email, password: userCredentials.password });
    let b;

    this.http
      .post(url, jsonObject,{headers: headers})
      .subscribe((response: Response) => {
          // login successful if there's a jwt token in the response
          let client = response.json();
          if (client && client.id) { //client.id howa e token
            b= true;
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUserToken', JSON.stringify(client));
            this.alertService.success("Connexion réussie");
          }
          else{
            b= false;
          }
        }, error => {
          this.alertService.error("Echec de connexion. Veuillez saisir un email valide et un mot de passe correct.");
        },
        ()=>{
          console.log("return now: "+ b);
          console.log(this.isLoggedIn());

          this.router.navigate(['']);

          //this.appComponent.connected= this.isLoggedIn();
          this.router.navigate(['']);
          return b;
        });


  }


  isLoggedIn(): boolean{
    var currenUserToken= localStorage.getItem('currentUserToken');
    if (currenUserToken){
      console.log("in login.service/isLoggedIn: currentUserToken == " + true);
      return true;
    }
    else {
      console.log("in login.service/isLoggedIn: currentUserToken == "+ false);
      return false;
    }
  }


  logout(){
    localStorage.removeItem('currentUserToken');

  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: LoginService, useClass: LoginService }
];
