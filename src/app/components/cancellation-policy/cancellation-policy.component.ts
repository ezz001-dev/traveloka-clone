import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cancellation-policy',
  imports: [NgFor],
  templateUrl: './cancellation-policy.component.html',
  styleUrl: './cancellation-policy.component.scss'
})
export class CancellationPolicyComponent {

  description: string = 'Kamu mendapatkan kamar dengan harga terbaik dari pilihan ini!';
  policies: string[] = [
    'Pemesanan ini tidak bisa di-refund.',
    'Non-reschedulable'
  ];
}
