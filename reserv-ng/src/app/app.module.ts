import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { OffreResComponent } from './offre-res/offre-res.component';

import { OffreResService } from './offre-res/offre-res.service';
import {MdGridListModule} from '@angular/material';

const appRoutes: Routes = [
  { path: 'offreRes', component: OffreResComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OffreResComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
    MdGridListModule
  ],
  providers: [OffreResService],
  bootstrap: [AppComponent]
})
export class AppModule { }
