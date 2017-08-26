import {Component, OnInit, Inject, ElementRef, ViewChild} from '@angular/core';
import {MdDialog} from '@angular/material';
import {Reserver2restaurantComponent} from "../reserver2restaurant/reserver2restaurant.component";
import {MD_DIALOG_DATA} from '@angular/material';
import { Client } from '../_models/Client';
import { OffreRes } from '../_models/OffreRes';
import { DataOffreResAndClientAndState } from '../_models/DataOffreResAndClientAndState';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit {

  client: Client;
  dataOffreResAndClientAndState: DataOffreResAndClientAndState;
  creerNouveauCompte;
  @ViewChild('tata') el:ElementRef;

  constructor(private dialog: MdDialog, @Inject(MD_DIALOG_DATA) public offreRes: OffreRes) {
    this.client= new Client();
    this.dataOffreResAndClientAndState= new DataOffreResAndClientAndState();
    this.dataOffreResAndClientAndState.offreRes=offreRes;
  }

  ngOnInit() {

  }
  popout2(){

    this.dialog.closeAll();
    this.creerNouveauCompte=this.el.nativeElement.checked;
    this.dataOffreResAndClientAndState.creerNouveauCompte= this.creerNouveauCompte;

    this.dataOffreResAndClientAndState.client=this.client;

    let dialogRef = this.dialog.open(Reserver2restaurantComponent, {
      data: this.dataOffreResAndClientAndState,
      height: '60%',
      width: '70%',
    });


  }
}


