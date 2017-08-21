import { Component, OnInit } from '@angular/core';
import { OffreRes } from '../offre-res/offreRes';
import { OffreResService } from '../offre-res/offre-res.service';

@Component({
  selector: 'app-offre-res-per-category',
  templateUrl: '../offre-res/offre-res.component.html',
  styleUrls: ['./offre-res-per-category.component.css']
})
export class OffreResPerCategoryComponent implements OnInit {
  offreReservs: OffreRes[] =[];
  constructor(private OffreResService: OffreResService) { }

  ngOnInit() {
    console.log("hotel");
    this.OffreResService.getOffreResPerCategory()
    .subscribe (res => {
      this.offreReservs=res;
      console.log(this.offreReservs);
      }, err => {
        console.log(err);
      });
  }
}
