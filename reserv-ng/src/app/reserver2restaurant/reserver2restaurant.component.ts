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
              private appComponent: AppComponent,
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

    //console.log(this.res2Form.controls['date'].errors.dateCheck)
    }

  postReserver(reserv){
    //console.log("momentValue -----------> "+ this.momentVariable);
    this.reserv.service=this.dataOffreResAndClientAndState.offreRes.service;
    this.reserv.statut="ok";
    this.reserv.montant=100;
    this.reserv.nb_places=1;
    this.reserv.dateEtHeure=this.momentVariable;
    this.reserv.id_offreRes=this.dataOffreResAndClientAndState.offreRes.id+'';
    //console.log(this.dataOffreResAndClientAndState);
    //console.log(this.reserv.id_offreRes);


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
        //register
        //console.log("iiiiiiiiin - reserver2restaurant.postReserv else else - debut");
        this.registerService.register(this.dataOffreResAndClientAndState.client);
        //console.log("iiiiiiiiin - reserver2restaurant.postReserv after register");
        //login
        let userCredentials= new UserCredentials();
        //console.log("usrCred: "+this.dataOffreResAndClientAndState.client.email+" "+ this.dataOffreResAndClientAndState.client.password);
        userCredentials.email=this.dataOffreResAndClientAndState.client.email;
        userCredentials.password=this.dataOffreResAndClientAndState.client.password;
        var b= this.loginService.login(userCredentials);
        //console.log("iiiiiiiiin - reserver2restaurant.postReserv after login");

        setTimeout(() => {
          this.appComponent.connected= this.loginService.isLoggedIn();
          //console.log("iiiiiiiiin - reserver2restaurant.postReserv after isLoggedIn");
          //console.log(this.loginService.isLoggedIn());

          this.clientService.getLoggedInClient()
            .subscribe (res => {
              //console.log("res.id: "+res.id);
              this.reserv.id_client=res.id+'';
              //console.log(this.dataOffreResAndClientAndState);
              this.reserv.id_offreRes=this.dataOffreResAndClientAndState.offreRes.id+'';

              //console.log("iiiiiiiiin - reserver2restaurant.postReserv - fin");
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

  //return (control: FormControl): {[key: string]: any} => {
    //console.log("dateCheckValidator called");
    let b: boolean= false;
    let d= new Date (control.value);
    let now= new Date("2017-08-20");
    //console.log( control.value);
    //console.log( d.getUTCFullYear()+" "+" "+d.getMonth()+" " + d.getDate());
    //console.log( now.getUTCFullYear()+" "+" "+now.getMonth()+" " + now.getDate());

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
    //const forbidden = nameRe.test(control.value);
    //return forbidden ? {'forbiddenName': {value: control.value}} : null;

    //return b ? null : {'dateCheck': {value: this.momentVariable}};
 // };
}
