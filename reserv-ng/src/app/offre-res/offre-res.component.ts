import { Component, OnInit } from '@angular/core';

import { OffreResService } from '../_services/offre-res.service';
import { OffreRes } from '../_models/offreRes';
import {Observable} from 'rxjs';
import {MdDialog} from '@angular/material';
import {ReserverComponent} from "../reserver/reserver.component";
import {Reserver2restaurantComponent} from "../reserver2restaurant/reserver2restaurant.component";
import {LoginService} from "../_services/login.service";
import {ClientService} from "../_services/client.service";
import {Client} from "../_models/Client";
import {DataOffreResAndClientAndState} from "../_models/DataOffreResAndClientAndState";
import {OffreResDetailsComponent} from "../offre-res-details/offre-res-details.component";
import {Reserver2hotelComponent} from "../reserver2hotel/reserver2hotel.component";


@Component({
  selector: 'app-offre-res',
  templateUrl: '../offre-res/offre-res.component.html',
  styleUrls: ['offre-res.component.css']
})
export class OffreResComponent implements OnInit {

  offreReservs: OffreRes[] =[];
  client: Client;
  ticketIconPath= '../../assets/icons/ticket.png';


  constructor(private OffreResService: OffreResService,
              private dialog: MdDialog,
              public loginService: LoginService,
              private clientService: ClientService) { }

  ngOnInit(): void {
    this.OffreResService.getOffreRes()
    .subscribe (res => {
      this.offreReservs=res;
      if (this.loginService.isLoggedIn()==true){
        this.clientService.getLoggedInClient()
          .subscribe (res => {
            this.client=res;
          }, err => {
            console.log(err);
          });
      }
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
    if (this.loginService.isLoggedIn()==true){
      let dataOffreResAndClientAndState: DataOffreResAndClientAndState= new DataOffreResAndClientAndState();
      dataOffreResAndClientAndState.offreRes=offreRes;
      dataOffreResAndClientAndState.client=this.client;

      if (dataOffreResAndClientAndState.offreRes.prestataire_categorie=="Restaurant"){
        let dialogRef = this.dialog.open(Reserver2restaurantComponent, {
          data: dataOffreResAndClientAndState,
          height: '75%',
          width: '60%'
        });
      }else if (dataOffreResAndClientAndState.offreRes.prestataire_categorie=="Hotel"){
        let dialogRef = this.dialog.open(Reserver2hotelComponent, {
          data: dataOffreResAndClientAndState,
          height: '75%',
          width: '60%'
        });
      }

    }else{

      let dialogRef = this.dialog.open(ReserverComponent, {
        data: offreRes,
        height: '75%',
        width: '60%'
      });

    }
  }

  popout_details(offreRes){
    console.log("details!!!");
    this.dialog.closeAll();
    let dialogRef = this.dialog.open(OffreResDetailsComponent, {
      data: offreRes,
      height: '81%',
      width: '60%',
    });
  }

}



