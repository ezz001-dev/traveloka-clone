import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;

  topMenu: Menu[] = [
    { label: 'Promo', url: '' },
    { label: 'Bantuan', url: '' },
    { label: 'Jadi Mitra', url: '' },
    { label: 'For Corporates', url: '' },
    { label: 'Pesanan', url: '' },
  ]

  bottomMenu: Menu[] = [
    { label: 'Hotel', url: '' },
    { label: 'Tiket Pesawat', url: '' },
    { label: 'Tiket Kreta Api', url: '' },
    { label: 'Antar Jemput Bandara', url: '' },
    { label: 'Rental Mobil', url: '' },
    { label: 'Atraksi dan Aktifitas', url: '' },
    { label: 'Produk Lainnya', url: '' },
  ]

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = offset > 50; // Ganti 50 dengan nilai tinggi scroll yang diinginkan
  }
}

interface Menu {
  label: string;
  url: string;
}
