import { Component, OnInit } from '@angular/core';

import { OffreResService } from '../_services/offre-res.service';
import { OffreRes } from '../_models/offreRes';
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
  popout(offreRes){
    //console.log(offreRes.titre);
    let dialogRef = this.dialog.open(ReserverComponent, {
      data: offreRes,
      height: '60%',
      width: '70%'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}



