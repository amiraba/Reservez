import { Injectable } from '@angular/core';
import {Client} from '../../app/_models/Client';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ClientService {

  headers= new Headers({
    'Content-Type': 'application/json',
  });

  constructor(private http: Http) { }

  public getLoggedInClientId(): string{
    var currenUserToken= localStorage.getItem('currentUserToken');
    let token= JSON.parse(currenUserToken);
    return token.userId;
  }

  getLoggedInClient(): Observable<Client> {
    let id= this.getLoggedInClientId();
    let url="http://localhost:3000/api/clients/"+id;

    return this.http.get(url, {headers: this.headers})
      .map( res => <Client[]> res.json() )
      .do((res) => {
      })
      .catch( err => {return Observable.throw(err)});
  }
}
