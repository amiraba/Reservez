import { Injectable } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {UserCredentials} from "../_models/UserCredentials";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {isLoop} from "tslint";


@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(userCredentials: UserCredentials) {
    let headers= new Headers({
      'Content-Type': 'application/json',
    });
    const url='http://localhost:3000/api/clients/login';
    const jsonObject= JSON.stringify({ email: userCredentials.email, password: userCredentials.password });

    this.http
      .post(url, jsonObject,{headers: headers})
      .subscribe((response: Response) => {
        // login successful if there's a jwt token in the response
        let client = response.json();
        if (client && client.id) { //client.id howa e token
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUserToken', JSON.stringify(client));
        }else{

        }
        return client;
      });
    }

    isLoggedIn(): boolean{
      var currenUserToken= localStorage.getItem('currentUserToken');
      if (currenUserToken){
        return true;
      }
      else {
        return false;
      }
    }
}

export const AUTH_PROVIDERS: Array<any> = [
   { provide: LoginService, useClass: LoginService }
  ];
