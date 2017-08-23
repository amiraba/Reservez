import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import {Observable} from 'rxjs';
import { OffreRes } from '../_models/offreRes';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';

@Injectable()
export class OffreResService {

   headers= new Headers({
    'Content-Type': 'application/json',
  });

  constructor(private http: Http) { }

  getOffreRes(): Observable<OffreRes[]> {
    let url="http://localhost:3000/api/offreReservs";

    return this.http.get(url, {headers: this.headers})
      .map( res => <OffreRes[]> res.json() )
      .catch( err => {return Observable.throw(err)});
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  offreResPerPrestataireCategory(theCategory): Observable<OffreRes[]> {
    let url="http://localhost:3000/api/offreReservs/"+theCategory+"/offreResPerPrestataireCategory";

    return this.http.get(url, {headers: this.headers})
      .map( res => <OffreRes[]> res.json() )
      .catch( err => {return Observable.throw(err)});
  }
}
