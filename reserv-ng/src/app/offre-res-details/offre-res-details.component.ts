import {Component, Inject, OnInit} from '@angular/core';
import {OffreResComponent} from "../offre-res/offre-res.component";
import {MD_DIALOG_DATA, MdDialog} from "@angular/material";
import {OffreRes} from "../_models/offreRes";

@Component({
  selector: 'app-offre-res-details',
  templateUrl: './offre-res-details.component.html',
  styleUrls: ['./offre-res-details.component.css']
})
export class OffreResDetailsComponent implements OnInit {

  constructor(private dialog: MdDialog,
              @Inject(MD_DIALOG_DATA) public offreRes: OffreRes) { }

  ngOnInit() {
  }

  retour(){
    this.dialog.closeAll();
  }

}
