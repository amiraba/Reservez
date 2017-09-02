import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Reservation} from "../_models/Reservation";

import {Observable} from 'rxjs';
import { OffreRes } from '../_models/offreRes';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';

@Injectable()
export class ReservationService {

  headers= new Headers({
    'Content-Type': 'application/json',
  });

  constructor(private http: Http) { }

  postReserv(reserv: Reservation): Promise<Reservation> {
    const url = `http://localhost:3000/api/reservations`;
    return this.http
      .put(url, JSON.stringify(reserv), {headers: this.headers})
      .toPromise()
      .then(() => reserv)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getReservsByCliendId(id){
    const url = 'http://localhost:3000/api/clients/'+id+'/reservs';
    return this.http.get(url, {headers: this.headers})
      .map( res => <Reservation[]> res.json() )
      .catch( err => {return Observable.throw(err)});
  }
}
