import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import {Observable} from 'rxjs';
import { OffreRes } from './offreRes';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';

@Injectable()
export class OffreResService {

   headers= new Headers({
    'Content-Type': 'application/json',
  });

  constructor(private http: Http) { }
  /*
  getOffreRes(){
    return this.http.get('http://localhost:3000/api/offreReservs')
      .subscribe( (data) => console.log(data) );

  }
  */
  /*
    //:Promise<OffreRes[]> 
    .toPromise()
    .then(response => response.json().data as OffreRes[])
    .catch(this.handleError);
  */
  getOffreRes(): Observable<OffreRes[]> {
    let url="http://localhost:3000/api/offreReservs";

    return this.http.get(url, {headers: this.headers})
      .map( res => res.json() )
      .catch( err => {return Observable.throw(err)});
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
