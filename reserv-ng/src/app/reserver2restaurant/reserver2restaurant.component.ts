import { Component, OnInit, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDatepicker} from '@angular/material';
import { Reservation } from '../_models/Reservation';
import {MdDialog} from '@angular/material';

import { ReservationService } from '../_services/reservation.service';
import {DataOffreResAndClientAndState} from "../_models/DataOffreResAndClientAndState";
import {LoginService} from "../_services/login.service";

@Component({
  selector: 'app-reserver2restaurant',
  templateUrl: './reserver2restaurant.component.html',
  styleUrls: ['./reserver2restaurant.component.css']
})
export class Reserver2restaurantComponent implements OnInit {

  reserv: Reservation;

  constructor(private dialog: MdDialog, @Inject(MD_DIALOG_DATA) public dataOffreResAndClientAndState: DataOffreResAndClientAndState,
              private reservationService: ReservationService,
              private loginService: LoginService) {
    this.reserv= new Reservation();
  }

  ngOnInit() {
    this.reserv.valideeParCarteBlueue=false;
  }

  postReserver(reserv){
    this.reserv.service=this.dataOffreResAndClientAndState.offreRes.service;
    this.reserv.statut="ok";
    this.reserv.montant=100;
    this.reserv.nb_places=1;
    this.reserv.id_offreRes=this.dataOffreResAndClientAndState.offreRes.id_offreRes;

    if (this.loginService.isLoggedIn()==true){
      this.reserv.id_client=this.dataOffreResAndClientAndState.client.id;
    }else{
      if ( this.dataOffreResAndClientAndState.creerNouveauCompte == false){
        this.reserv.email_client=this.dataOffreResAndClientAndState.client.email;
      }
    }

    this.reservationService.postReserv(reserv);
    this.dialog.closeAll();
  }

}
