import { Component, OnInit, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDatepicker} from '@angular/material';
import { DataOffreResAndClient } from '../_models/DataOffreResAndClient';
import { Reservation } from '../_models/Reservation';
import {MdDialog} from '@angular/material';

import { ReservationService } from '../_services/reservation.service';

@Component({
  selector: 'app-reserver2restaurant',
  templateUrl: './reserver2restaurant.component.html',
  styleUrls: ['./reserver2restaurant.component.css']
})
export class Reserver2restaurantComponent implements OnInit {

  reserv: Reservation;

  constructor(private dialog: MdDialog, @Inject(MD_DIALOG_DATA) public dataOffreResAndClient: DataOffreResAndClient, private reservationService: ReservationService) {
    this.reserv= new Reservation();
  }

  ngOnInit() {
    this.reserv.valideeParCarteBlueue=false;
  }

  postReserver(reserv){
    this.reserv.service=this.dataOffreResAndClient.offreRes.service;
    this.reserv.statut="ok";
    this.reserv.montant=100;
    this.reserv.nb_places=1;
    this.reserv.id_offreRes="5990e9a1fbaa6f3e8c444a24";
    this.reserv.id_client="599adb1fc4931d4594d18069";
    this.reservationService.postReserv(reserv);
    this.dialog.closeAll();
  }

}
