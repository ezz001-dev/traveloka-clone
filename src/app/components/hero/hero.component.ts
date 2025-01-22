import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [NgClass],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  constructor(private router: Router) { }

  menuItems: Menu[] = [
    {
      label: 'Hotel', url: '', path: 'icon/hotel.png',
      isActive: true
    },
    {
      label: 'Tiket Pesawat', url: '', path: 'icon/plane.png',
      isActive: false
    },
    {
      label: 'Tiket Kreta Api', url: '', path: 'icon/train.png',
      isActive: false
    },
    {
      label: 'Tiket Bus & Travel', url: '', path: 'icon/train.png',
      isActive: false
    },
    {
      label: 'Antar Jemput Bandara', url: '', path: 'icon/car.png',
      isActive: false
    },
    {
      label: 'Rental Mobil', url: '', path: 'icon/car.png',
      isActive: false
    },
    {
      label: 'Atraksi dan Aktifitas', url: '', path: 'icon/car.png',
      isActive: false
    },
    {
      label: 'Lainnya', url: '', path: 'icon/car.png',
      isActive: false
    },

  ]

  onSearch() {
    this.router.navigate(['/hotel'])
  }
}

interface Menu {
  label: string;
  url: string;
  path: string;
  isActive: boolean;
}
