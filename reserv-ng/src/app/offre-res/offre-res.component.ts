import { Component, OnInit } from '@angular/core';

import { OffreResService } from './offre-res.service';
import { OffreRes } from './offreRes';
import {Observable} from 'rxjs';
import {MdDialog} from '@angular/material';
import {ReserverComponent} from "../reserver/reserver.component";

@Component({
  selector: 'app-offre-res',
  templateUrl: '../offre-res/offre-res.component.html',
  styleUrls: ['offre-res.component.css']
})
export class OffreResComponent implements OnInit {

  offreReservs: OffreRes[] =[];

  constructor(private OffreResService: OffreResService, private dialog: MdDialog) { }

  ngOnInit(): void {
    this.OffreResService.getOffreRes()
    .subscribe (res => {
      this.offreReservs=res;
      //console.log(this.offreReservs);
      }, err => {
        console.log(err);
      });

  }

  offreResPerPrestataireCategory(theCategory){
    this.OffreResService.offreResPerPrestataireCategory(theCategory)
    .subscribe (res => {
      this.offreReservs=res;
      console.log(this.offreReservs);
      }, err => {
        console.log(err);
      });
  }
  popout(){
    console.log("tatat");
    let dialogRef = this.dialog.open(ReserverComponent, {
      height: '400px',
      width: '600px',
    });
  }

}



