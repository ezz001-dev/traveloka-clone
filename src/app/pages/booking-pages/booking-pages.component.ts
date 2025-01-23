import { Component } from '@angular/core';
import { BookingCardComponent } from '../../components/booking-card/booking-card.component';
import { FormsModule } from '@angular/forms';
import { AddonsComponent } from '../../components/addons/addons.component';
import { CancellationPolicyComponent } from '../../components/cancellation-policy/cancellation-policy.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-pages',
  imports: [
    BookingCardComponent,
    AddonsComponent,
    CancellationPolicyComponent,
    FormsModule],
  templateUrl: './booking-pages.component.html',
  styleUrl: './booking-pages.component.scss'
})
export class BookingPagesComponent {

  fullName: string = '';
  email: string = '';
  phoneNumber: string = '';
  isSameAsBooker: boolean = true;

  priceBreakdown: PriceBreakdown = {
    roomDescription: '(1x) Superior King Bed (1 malam)',
    roomPrice: 368569,
    taxAndFees: 81454,
    totalPrice: 450023,
  };

  constructor(private router: Router) { }


  submitForm() {
    // Handle form submission logic here
    console.log({
      fullName: this.fullName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      isSameAsBooker: this.isSameAsBooker,
    });
  }

  proceedToPayment() {
    // Handle payment logic here
    console.log('Proceeding to payment...');
    this.router.navigate(['payment'])
  }
}

interface PriceBreakdown {
  roomDescription: string;
  roomPrice: number;
  taxAndFees: number;
  totalPrice: number;
}

