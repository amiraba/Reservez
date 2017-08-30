import {Component, OnInit, Inject, ElementRef, ViewChild} from '@angular/core';
import {MdDialog} from '@angular/material';
import {Reserver2restaurantComponent} from "../reserver2restaurant/reserver2restaurant.component";
import {MD_DIALOG_DATA} from '@angular/material';
import { Client } from '../_models/Client';
import { OffreRes } from '../_models/OffreRes';
import { DataOffreResAndClientAndState } from '../_models/DataOffreResAndClientAndState';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor(private dialog: MdDialog, @Inject(MD_DIALOG_DATA) public offreRes: OffreRes) {
    this.client= new Client();
    this.dataOffreResAndClientAndState= new DataOffreResAndClientAndState();
    this.dataOffreResAndClientAndState.offreRes=offreRes;
  }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges(){
    console.log("+change");
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
      ]),
      'checking' : new FormControl("", [])
    });
  }
  popout2(){

    this.dialog.closeAll();
    this.creerNouveauCompte=this.el.nativeElement.checked;
    this.dataOffreResAndClientAndState.creerNouveauCompte= this.creerNouveauCompte;

    if (this.creerNouveauCompte==true){
      this.res1Form.addControl(
        'password', new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})"),
      ]))
      )
    }

    this.dataOffreResAndClientAndState.client=this.client;

    let dialogRef = this.dialog.open(Reserver2restaurantComponent, {
      data: this.dataOffreResAndClientAndState,
      height: '90%',
      width: '60%',
    });


  }
}


