import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HotelComponent } from './pages/hotel/hotel.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'hotel', component: HotelComponent
  }
];
