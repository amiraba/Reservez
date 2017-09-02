import {Component, OnChanges} from '@angular/core';
import { ApplicationRef   } from '@angular/core';
import { OffreResService } from './_services/offre-res.service';

import { OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from './_services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit{
  title = 'app';


  constructor() {
  }

  ngOnInit(): void {

  }



}
