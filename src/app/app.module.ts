import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { Lau1Component } from './lau1/lau1.component';
import { Lau2Component } from './lau2/lau2.component';
import { Lau3Component } from './lau3/lau3.component';
import { Chay1Component } from './chay1/chay1.component';
import { Chay2Component } from './chay2/chay2.component';
import { Chay3Component } from './chay3/chay3.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    EventsComponent,
    Lau1Component,
    Lau2Component,
    Lau3Component,
    Chay1Component,
    Chay2Component,
    Chay3Component,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
