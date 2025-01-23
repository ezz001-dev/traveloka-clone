import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-coupon-list',
  imports: [NgFor, CarouselModule],
  templateUrl: './coupon-list.component.html',
  styleUrl: './coupon-list.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CouponListComponent {

  pathImg = {
    left: 'icon/left.png',
    next: 'icon/next.png'
  }

  coupons: Coupon[] = [
    {
      code: 'HELLOSGCAID',
      description: 'Kupon Diskon s.d Rp300rb',
      discount: 'Berlaku untuk Pengguna Baru.',
    },
    {
      code: 'JALANYUK',
      description: 'Diskon 8%',
      discount: 'mln. transaksi Rp 500rb',
    },
    {
      code: 'JALANYUK',
      description: 'Diskon s.d 8%',
      discount: 'mln. transaksi Rp 300rb',
    },
    {
      code: 'JALANYUK',
      description: 'Diskon s.d 8%',
      discount: 'mln. transaksi Rp 300rb',
    },
    {
      code: 'JALANYUK',
      description: 'Diskon s.d 8%',
      discount: 'mln. transaksi Rp 300rb',
    },
    {
      code: 'JALANYUK',
      description: 'Diskon s.d 8%',
      discount: 'mln. transaksi Rp 300rb',
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 15,
    navSpeed: 700,
    navText: [
      // `<span class="font-semibold text-blue rounded-md block" > < </span>`,
      // `<span class="font-semibold text-blue rounded-md block" > > </span>`
      `<div>
        <span class="font-semibold text-blue block icon-img" >
          <img src="${this.pathImg.left}" alt="">
        </span>
      </div>
      `,
      `
      <div>
        <span class="font-semibold text-blue block icon-img" >
          <img src="${this.pathImg.next}" alt="">
        </span>
      </div>
      `
    ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  copyToClipboard(code: string) {
    navigator.clipboard.writeText(code).then(() => {
      alert('Kode kupon telah disalin: ' + code);
    });
  }
}

interface Coupon {
  code: string;
  description: string;
  discount: string;
}
