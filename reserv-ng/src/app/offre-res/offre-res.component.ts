import { Component, OnInit } from '@angular/core';

import { OffreResService } from './offre-res.service';
import { OffreRes } from './offreRes';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-offre-res',
  templateUrl: './offre-res.component.html',
  styleUrls: []
})
export class OffreResComponent implements OnInit {

  offreReservs: OffreRes[] =[];

  constructor(private OffreResService: OffreResService) { }

  ngOnInit(): void {
    this.OffreResService.getOffreRes()
    .subscribe (res => {
      this.offreReservs=res;
      //console.log(this.offreReservs);
      }, err => {
        console.log(err);
      });

  }

}



