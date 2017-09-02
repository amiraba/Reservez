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

import { LoginComponent } from './login/login.component';
import { ClientMesReservComponent } from './client-mes-reserv/client-mes-reserv.component'
import {AlertService} from "./_services/alert.service";
import { AlertComponent } from './alert/alert.component';
import { RegisterComponent } from './register/register.component';
import {RegisterService} from "./_services/register.service";
import {ClientService} from "./_services/client.service";
import { MomentModule } from 'angular2-moment';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffreResDetailsComponent } from './offre-res-details/offre-res-details.component';
import { Reserver2hotelComponent } from './reserver2hotel/reserver2hotel.component';

const appRoutes: Routes = [
  { path: '', component: OffreResComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'clientMesReserv',
    canActivate: [ LoggedInGuard ],
    component: ClientMesReservComponent
  },


  { path: '**', component: LoginComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    OffreResComponent,
    ReserverComponent,
    Reserver2restaurantComponent,
    LoginComponent,
    ClientMesReservComponent,
    AlertComponent,
    RegisterComponent,
    FooterComponent,
    AboutComponent,
    NavbarComponent,
    OffreResDetailsComponent,
    Reserver2hotelComponent
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
    FormsModule,
    MomentModule,
    DateTimePickerModule,
    ReactiveFormsModule
  ],
  providers: [
    OffreResService,
    ReservationService,
    LoginService,
    AlertService,
    RegisterService,
    ClientService,
    AUTH_PROVIDERS,
    LoggedInGuard,
    AppComponent,
    NavbarComponent
  ],
  entryComponents: [
    ReserverComponent,
    Reserver2restaurantComponent,
    OffreResDetailsComponent,
    Reserver2hotelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
