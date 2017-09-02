import { Component, OnInit } from '@angular/core';
import {Reservation} from "../_models/Reservation";
import {ReservationService} from "../_services/reservation.service";
import {ClientService} from "../_services/client.service";

@Component({
  selector: 'app-client-mes-reserv',
  templateUrl: './client-mes-reserv.component.html',
  styleUrls: ['./client-mes-reserv.component.css']
})
export class ClientMesReservComponent implements OnInit {

  reservs: Reservation[];

  constructor(private reservationService: ReservationService, private clientService: ClientService) { }

  ngOnInit() {
    let id=this.clientService.getLoggedInClientId();
    console.log("id: "+id);
    this.reservationService.getReservsByCliendId(id).subscribe( res => {
      this.reservs=res;
      console.log(this.reservs);
    },err => {
        console.log(err);
    });
  }
}
