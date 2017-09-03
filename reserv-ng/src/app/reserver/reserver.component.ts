import {Component, OnInit, Inject, ElementRef, ViewChild} from '@angular/core';
import {MdDialog} from '@angular/material';
import {Reserver2restaurantComponent} from "../reserver2restaurant/reserver2restaurant.component";
import {MD_DIALOG_DATA} from '@angular/material';
import { Client } from '../_models/Client';
import { OffreRes } from '../_models/OffreRes';
import { DataOffreResAndClientAndState } from '../_models/DataOffreResAndClientAndState';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Reserver2hotelComponent} from "../reserver2hotel/reserver2hotel.component";

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
  res1Form: FormGroup;
  res1bForm: FormGroup;

  constructor(private dialog: MdDialog,
              @Inject(MD_DIALOG_DATA) public offreRes: OffreRes) {

    this.client= new Client();
    this.dataOffreResAndClientAndState= new DataOffreResAndClientAndState();
    this.dataOffreResAndClientAndState.offreRes=offreRes;
  }

  ngOnInit() {
    this.createForm();
    this.creerNouveauCompte=this.el.nativeElement.checked;
    console.log(this.res1bForm.valid);
    console.log("this.creerNouveauCompte: "+this.creerNouveauCompte);
  }

  createForm(){
    this.res1Form = new FormGroup({
      // tslint:disable-next-line
      nom: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.pattern("[a-zA-Z ]*"),
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")
      ]),
      tel: new FormControl('', [
        Validators.minLength(8),
        Validators.pattern("[0-9]+"),
      ])
    });

    this.res1bForm = new FormGroup({
      'password': new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})"),
      ]))
    });
  }
  popout2(){
    this.dialog.closeAll();
    this.creerNouveauCompte=this.el.nativeElement.checked;
    this.dataOffreResAndClientAndState.creerNouveauCompte= this.creerNouveauCompte;

    this.dataOffreResAndClientAndState.client=this.client;

    if (this.dataOffreResAndClientAndState.offreRes.prestataire_categorie=="Restaurant"){
      let dialogRef = this.dialog.open(Reserver2restaurantComponent, {
        data: this.dataOffreResAndClientAndState,
        height: '90%',
        width: '60%'
      });
    }else if (this.dataOffreResAndClientAndState.offreRes.prestataire_categorie=="Hotel"){
      console.log("Im' here")
      let dialogRef = this.dialog.open(Reserver2hotelComponent, {
        data: this.dataOffreResAndClientAndState,
        height: '90%',
        width: '60%'
      });
    }

  }

  checkFormsInvalidity(): boolean{
    if (this.el.nativeElement.checked){
      console.log("cas 2 forms");
      return (!this.res1Form.valid || !this.res1bForm.valid);
    }else{
      console.log("cas 1 form");
      return (!this.res1Form.valid);
    }
  }
}


