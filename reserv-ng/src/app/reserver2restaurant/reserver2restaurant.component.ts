import { Component, OnInit, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDatepicker} from '@angular/material';
import { DataOffreResAndClient } from '../_models/DataOffreResAndClient';
import { Reservation } from '../_models/Reservation';


@Component({
  selector: 'app-reserver2restaurant',
  templateUrl: './reserver2restaurant.component.html',
  styleUrls: ['./reserver2restaurant.component.css']
})
export class Reserver2restaurantComponent implements OnInit {

  reserv: Reservation;

  constructor(@Inject(MD_DIALOG_DATA) public dataOffreResAndClient: DataOffreResAndClient) {
    this.reserv= new Reservation();
  }

  ngOnInit() {

  }

}
