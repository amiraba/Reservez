import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialog} from "@angular/material";
import {DataOffreResAndClientAndState} from "../_models/DataOffreResAndClientAndState";
import {ReservationService} from "../_services/reservation.service";
import {LoginService} from "../_services/login.service";
import {RegisterService} from "../_services/register.service";
import {NavbarComponent} from "../navbar/navbar.component";
import {ClientService} from "../_services/client.service";
import {AlertService} from "../_services/alert.service";
import {Reservation} from "../_models/Reservation";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserCredentials} from "../_models/UserCredentials";

@Component({
  selector: 'app-reserver2hotel',
  templateUrl: './reserver2hotel.component.html',
  styleUrls: ['./reserver2hotel.component.css']
})
export class Reserver2hotelComponent implements OnInit {
  reserv: Reservation;
  momentVariable;
  momentVariable2;
  res2Form: FormGroup;

  constructor(private dialog: MdDialog,
              @Inject(MD_DIALOG_DATA) public dataOffreResAndClientAndState: DataOffreResAndClientAndState,
              private reservationService: ReservationService,
              private loginService: LoginService,
              private registerService: RegisterService,
              private clientService: ClientService,
              private alertService: AlertService) {

    this.reserv= new Reservation();

    this.res2Form = new FormGroup({
      'date' : new FormControl ('', Validators.compose( [
        Validators.required,
        dateCheckValidator
      ])),
      'date2' : new FormControl ('', Validators.compose( [
        Validators.required,
        dateCheckValidator,
        //dateCheckValidatorDate2('','date')
      ])),
    });

  }

  ngOnInit() {
    this.reserv.valideeParCarteBlueue=false;
  }

  postReserver(reserv){
    this.reserv.titre=this.dataOffreResAndClientAndState.offreRes.titre;
    this.reserv.service=this.dataOffreResAndClientAndState.offreRes.service;
    this.reserv.statut="ok";
    this.reserv.nb_places=1;
    this.reserv.dateEtHeure=this.momentVariable;
    //TODO

    this.reserv.id_offreRes=this.dataOffreResAndClientAndState.offreRes.id+'';

    if (this.loginService.isLoggedIn()==true) {
      this.clientService.getLoggedInClient()
        .subscribe (res => {
          this.reserv.clientId=res.id+'';
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

        this.registerService.register(this.dataOffreResAndClientAndState.client).then(
          () => {
            let userCredentials= new UserCredentials();
            userCredentials.email=this.dataOffreResAndClientAndState.client.email;
            userCredentials.password=this.dataOffreResAndClientAndState.client.password;
            this.loginService.login(userCredentials);

            setTimeout(() => {
              this.clientService.getLoggedInClient()
                .subscribe (res => {
                  this.reserv.clientId=res.id+'';
                  this.reserv.id_offreRes=this.dataOffreResAndClientAndState.offreRes.id+'';
                  this.reservationService.postReserv(reserv);
                  this.dialog.closeAll();
                }, err => {
                  console.log(err);
                });
            }, 1000);
          }
        ).catch( err => {
          this.alertService.error("L'email de la réservation existe déjà.")
        });

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
/*
export function dateCheckValidatorDate2(control: FormControl, date: string) {

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
  return {'dateCheck2': {value: d}};
}
*/

