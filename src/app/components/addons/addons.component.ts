import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addons',
  imports: [NgFor],
  templateUrl: './addons.component.html',
  styleUrl: './addons.component.scss'
})
export class AddonsComponent {

  addons: Addon[] = [
    {
      name: 'Asuransi Hotel',
      description: 'Lindungi rencana menginap Anda dari pembatalan dan kejadian tak terduga lainnya.',
      price: 13000,
      details: 'Hingga Rp500.000 per kamar per malam untuk pesanan kamar hotel yang hangus\nHingga Rp2.000.000 untuk pembatalan hotel karena alasan tertentu\nHingga Rp2.500.000 untuk kehilangan atau kerusakan bagasi dan barang pribadi\nHingga Rp30.000.000 untuk perlindungan kecelakaan\nHingga Rp3.000.000 untuk biaya pengobatan akibat kecelakaan',
    },
    {
      name: 'Perlindungan Check-in',
      description: 'Dapatkan kompensasi karena gagal check-in hotel karena kejadian yang tidak terduga (cth: penuh)',
      price: 10000,
      details: '',
    },
    {
      name: 'Refund Setelah Check-in',
      description: 'Tidak suka dengan hotel anda setelah check-in? Apa pun alasannya, pesan hotel lain saja!',
      price: 77000,
      details: 'Kami akan mengembalikan 50% (hingga Rp 500.000) dari hotel yang anda batalkan setelah kamu memesan hotel baru.',
    },
  ];

}

interface Addon {
  name: string;
  description: string;
  price: number;
  details: string;
}
