import { Component, OnInit,  Inject, ElementRef, ViewChild} from '@angular/core';
import {MD_DIALOG_DATA, MdDatepicker} from '@angular/material';
import { Reservation } from '../_models/Reservation';
import {MdDialog} from '@angular/material';

import { ReservationService } from '../_services/reservation.service';
import {DataOffreResAndClientAndState} from "../_models/DataOffreResAndClientAndState";
import {LoginService} from "../_services/login.service";
import {UserCredentials} from "../_models/UserCredentials";
import {RegisterService} from "../_services/register.service";
import {AppComponent} from "../app.component";
import {ClientService} from "../_services/client.service";
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-reserver2restaurant',
  templateUrl: './reserver2restaurant.component.html',
  styleUrls: ['./reserver2restaurant.component.css']
})
export class Reserver2restaurantComponent implements OnInit {
  x:string;
  reserv: Reservation;
  momentVariable;
  res2Form: FormGroup;
  @ViewChild('myvar') el: ElementRef;

  constructor(private dialog: MdDialog, @Inject(MD_DIALOG_DATA) public dataOffreResAndClientAndState: DataOffreResAndClientAndState,
              private reservationService: ReservationService,
              private loginService: LoginService,
              private registerService: RegisterService,
              private navbarComponent:NavbarComponent,
              private clientService: ClientService) {
    this.reserv= new Reservation();

    this.res2Form = new FormGroup({
      'date' : new FormControl ('', Validators.compose( [
        Validators.required,
        dateCheckValidator
      ])),
    });

  }

  ngOnInit() {
    this.reserv.valideeParCarteBlueue=false;
    }

  postReserver(reserv){
    this.reserv.service=this.dataOffreResAndClientAndState.offreRes.service;
    this.reserv.statut="ok";
    this.reserv.nb_places=1;
    this.reserv.dateEtHeure=this.momentVariable;
    this.reserv.id_offreRes=this.dataOffreResAndClientAndState.offreRes.id+'';

    if (this.loginService.isLoggedIn()==true) {
      this.clientService.getLoggedInClient()
        .subscribe (res => {
          console.log("a333333! "+ res.id);
          this.reserv.id_client=res.id+'';
          this.reservationService.postReserv(reserv);
          this.dialog.closeAll();

        }, err => {
          console.log(err);
        });
    }else{
      if ( this.dataOffreResAndClientAndState.creerNouveauCompte == false){

        this.reserv.email_client=this.dataOffreResAndClientAndState.client.email;
        this.reservationService.postReserv(reserv);
        this.dialog.closeAll();

      }else{
        this.registerService.register(this.dataOffreResAndClientAndState.client);
        let userCredentials= new UserCredentials();
        userCredentials.email=this.dataOffreResAndClientAndState.client.email;
        userCredentials.password=this.dataOffreResAndClientAndState.client.password;
        var b= this.loginService.login(userCredentials);

        setTimeout(() => {
          this.clientService.getLoggedInClient()
            .subscribe (res => {
              //console.log("res.id: "+res.id);
              this.reserv.id_client=res.id+'';
              this.reserv.id_offreRes=this.dataOffreResAndClientAndState.offreRes.id+'';
              this.reservationService.postReserv(reserv);
              this.dialog.closeAll();
            }, err => {
              console.log(err);
            });

        }, 1000);
      }
    }
  }
}

export function dateCheckValidator(control: FormControl) {

    let b: boolean= false;
    let d= new Date (control.value);
    let now= new Date();

    if (d.getUTCFullYear() > now.getFullYear()){
      return null;
    }else {
        if (d.getMonth() > now.getMonth() && d.getUTCFullYear() == now.getFullYear()){
          return null;
        }else{
          if (d.getDate() > now.getDate() && d.getMonth()== now.getMonth()){
            return null;
          }
        }
      }
    return {'dateCheck': {value: d}};
}
