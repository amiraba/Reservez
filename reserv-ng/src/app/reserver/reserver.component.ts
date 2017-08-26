import { Component, OnInit ,Inject} from '@angular/core';
import {MdDialog} from '@angular/material';
import {Reserver2restaurantComponent} from "../reserver2restaurant/reserver2restaurant.component";
import {MD_DIALOG_DATA} from '@angular/material';
import { Client } from '../_models/Client';
import { OffreRes } from '../_models/OffreRes';
import { DataOffreResAndClient } from '../_models/DataOffreResAndClient';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit {

  client: Client;
  dataOffreResAndClient: DataOffreResAndClient;
  creerNouveauCompte;

  constructor(private dialog: MdDialog, @Inject(MD_DIALOG_DATA) public offreRes: OffreRes) {
    this.client= new Client();
    this.dataOffreResAndClient= new DataOffreResAndClient();
    this.dataOffreResAndClient.offreRes=offreRes;
  }

  ngOnInit() {

  }
  popout2(){

    this.dialog.closeAll();

    this.dataOffreResAndClient.client=this.client;

    let dialogRef = this.dialog.open(Reserver2restaurantComponent, {
      data: this.dataOffreResAndClient,
      height: '60%',
      width: '70%',
    });


  }
}


