import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  imports: [NgFor, NgIf],
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.scss'
})
export class PaymentMethodComponent {
  paymentMethods: PaymentMethod[] = [
    { name: 'BCA Virtual Account', description: 'BCA', isNew: true },
    { name: 'Mandiri Virtual Account', description: 'mandiri', isNew: false },
    { name: 'BRI Virtual Account', description: 'BRIVA', isNew: false },
    { name: 'BNI Virtual Account', description: 'BNI', isNew: false },
    { name: 'CIMB Niaga Virtual Account', description: 'CIMB NIAGA', isNew: true },
    { name: 'Virtual Account lainnya', description: '', isNew: false },
  ];

  selectedMethod: string = '';

  selectMethod(method: string) {
    this.selectedMethod = method;
  }
}

interface PaymentMethod {
  name: string;
  description: string;
  isNew: boolean;
}
