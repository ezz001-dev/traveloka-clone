import { Component } from '@angular/core';
import { PaymentMethodComponent } from '../../components/payment-method/payment-method.component';
import { HotelDetailsComponent } from '../../components/hotel-details/hotel-details.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-payment',
  imports: [
    PaymentMethodComponent,
    HotelDetailsComponent,
    NgIf,
    NgFor,
    FormsModule
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  paymentOptions: PaymentOption[] = [
    { name: 'Virtual Account', description: 'BCA, Mandiri, BRIVA, BNI', isNew: true },
    { name: 'Transfer Bank', description: '', isNew: false },
    { name: 'Kartu Kredit/Debit', description: '', isNew: false },
    { name: 'Minimarket', description: '', isNew: false },
  ];

  totalPrice: number = 660000;
  couponCode: string = '';

  applyCoupon() {
    // Logic to apply coupon
    console.log('Applying coupon:', this.couponCode);
  }

  proceedToPayment() {
    // Logic to proceed to payment
    console.log('Proceeding to payment...');
  }

}

interface PaymentOption {
  name: string;
  description: string;
  isNew: boolean;
}
