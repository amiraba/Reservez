import { Component } from '@angular/core';

import { OffreResService } from './_services/offre-res.service';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor() { }

  ngOnInit(): void {
  }
}
