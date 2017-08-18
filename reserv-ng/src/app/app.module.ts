import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { OffreResComponent } from './offre-res/offre-res.component';

import { OffreResService } from './offre-res/offre-res.service';
import {MdGridListModule, MdIconModule} from '@angular/material';
import { OffreResPerCategoryComponent } from './offre-res-per-category/offre-res-per-category.component';

const appRoutes: Routes = [
  { path: 'offreRes', component: OffreResComponent },
  { path: 'offreResPerCategory', component: OffreResPerCategoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OffreResComponent,
    OffreResPerCategoryComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
    MdGridListModule,
    MdIconModule
  ],
  providers: [OffreResService],
  bootstrap: [AppComponent]
})
export class AppModule { }
