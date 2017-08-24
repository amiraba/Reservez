import { Injectable } from '@angular/core';
import {Client} from "../_models/Client";
import { Headers, Http } from '@angular/http';

@Injectable()
export class RegisterService {

  headers= new Headers({
    'Content-Type': 'application/json',
  });

  constructor(private http: Http) { }

  register(client: Client): Promise<Client> {
    const url = `http://localhost:3000/api/clients`;
    return this.http
      .put(url, JSON.stringify(client), {headers: this.headers})
      .toPromise()
      .then(() => client)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
