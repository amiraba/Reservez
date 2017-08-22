import { Component, OnInit ,Inject} from '@angular/core';
import {MdDialog} from '@angular/material';
import {Reserver2restaurantComponent} from "../reserver2restaurant/reserver2restaurant.component";
import {MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit {

  constructor(private dialog: MdDialog, @Inject(MD_DIALOG_DATA) public offreRes: any) { }

  ngOnInit() {
  }
  popout2(){
    console.log("bla:"+this.offreRes.titre);
    this.dialog.closeAll();
    let dialogRef = this.dialog.open(Reserver2restaurantComponent, {
      data: this.offreRes,
      height: '60%',
      width: '70%',
    });
  }
}
