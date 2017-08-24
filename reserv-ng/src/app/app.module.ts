import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { OffreResComponent } from './offre-res/offre-res.component';
import { ReserverComponent } from './reserver/reserver.component';

import { OffreResService } from './_services/offre-res.service';
import { ReservationService } from './_services/reservation.service';
import { LoginService } from './_services/login.service';
import { LoggedInGuard } from './_guards/logged-in.guard';
import { AUTH_PROVIDERS } from './_services/login.service';

import {MdDialog, MdGridListModule, MdIconModule, MdDialogModule, MdDatepickerModule, MdNativeDateModule, MdInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Reserver2restaurantComponent } from './reserver2restaurant/reserver2restaurant.component';

import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { ClientMesReservComponent } from './client-mes-reserv/client-mes-reserv.component'
import {AlertService} from "./_services/alert.service";
import { AlertComponent } from './alert/alert.component';

const appRoutes: Routes = [
  { path: 'clientMesReserv',
    canActivate: [ LoggedInGuard ],
    component: ClientMesReservComponent
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: OffreResComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    OffreResComponent,
    ReserverComponent,
    Reserver2restaurantComponent,
    LoginComponent,
    ClientMesReservComponent,
    AlertComponent
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
    BrowserAnimationsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdInputModule,
    FormsModule
  ],
  providers: [
    OffreResService,
    ReservationService,
    LoginService,
    AlertService,
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  entryComponents: [
    ReserverComponent,
    Reserver2restaurantComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
