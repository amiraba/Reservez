import { Component, OnInit, Inject} from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-reserver2restaurant',
  templateUrl: './reserver2restaurant.component.html',
  styleUrls: ['./reserver2restaurant.component.css']
})
export class Reserver2restaurantComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) public offreRes: any) { }

  ngOnInit() {
    console.log("bla2:"+this.offreRes.id);
  }

}
