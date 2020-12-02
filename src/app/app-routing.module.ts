import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Chay1Component } from './chay1/chay1.component';
import { Chay2Component } from './chay2/chay2.component';
import { Chay3Component } from './chay3/chay3.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { Lau1Component } from './lau1/lau1.component';
import { Lau2Component } from './lau2/lau2.component';
import { Lau3Component } from './lau3/lau3.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: 'events', component: EventsComponent },
    { path: 'chay', component: Chay1Component },    
    { path: 'chay2', component: Chay2Component },
    { path: 'chay3', component: Chay3Component },
    { path: 'lau', component: Lau1Component },
    { path: 'lau2', component: Lau2Component },
    { path: 'lau3', component: Lau3Component },
    { path: 'photos', component: PhotosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
