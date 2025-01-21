import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-coupon-list',
  imports: [NgFor],
  templateUrl: './coupon-list.component.html',
  styleUrl: './coupon-list.component.scss'
})
export class CouponListComponent {

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
  ];

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
