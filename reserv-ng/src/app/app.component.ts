import { Component } from '@angular/core';

import { OffreResService } from './offre-res/offre-res.service';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './offreRes-css/bootstrap.css',
    './offreRes-css/bootstrap.min.css',
    './offreRes-css/mdb.css',
    './offreRes-css/mdb.min.css',
    './offreRes-css/style.css',
]
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor() { }

  ngOnInit(): void {
  }
}
