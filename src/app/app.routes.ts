import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { ProducDetailsComponent } from './pages/produc-details/produc-details.component';
import { BookingPagesComponent } from './pages/booking-pages/booking-pages.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'hotel', component: HotelComponent
  },
  {
    path: 'hotel/detail', component: ProducDetailsComponent
  },
  {
    path: 'booking/:id', component: BookingPagesComponent
  }
];
