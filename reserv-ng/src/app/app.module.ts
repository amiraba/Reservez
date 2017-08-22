import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { OffreResComponent } from './offre-res/offre-res.component';
import { ReserverComponent } from './reserver/reserver.component';

import { OffreResService } from './offre-res/offre-res.service';

import {MdDialog, MdGridListModule, MdIconModule, MdDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'offreRes', component: OffreResComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OffreResComponent,
    ReserverComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
    MdGridListModule,
    MdIconModule,
    MdDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    OffreResService
  ],
  entryComponents: [
    ReserverComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
