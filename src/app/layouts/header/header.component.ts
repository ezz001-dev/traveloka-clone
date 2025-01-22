import { NgClass } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isHomePage = false;

  classHeader: string = '';
  textClass: string = ''


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

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.checkIfHomePage();
    })
  }

  checkIfHomePage(): void {
    this.isHomePage = this.router.url == '/' || this.router.url == '/home';
    console.log("isHome ", this.isHomePage)
    if (!this.isHomePage) {
      this.classHeader = `shadow-md bg-white relative`
      this.textClass = `text-gray-700`
    }
    console.log(this.textClass)
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // console.log(this.router.url)

    if (this.isHomePage) {
      const offset = window.pageYOffset || document.documentElement.scrollTop;
      this.isScrolled = offset > 50; // Ganti 50 dengan nilai tinggi scroll yang diinginkan
      console.log("Home", this.isHomePage)
      console.log(this.isScrolled)
    }

  }
}

interface Menu {
  label: string;
  url: string;
}
