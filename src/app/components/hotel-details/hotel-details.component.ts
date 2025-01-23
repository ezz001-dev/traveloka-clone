import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-details',
  imports: [NgIf, NgFor],
  templateUrl: './hotel-details.component.html',
  styleUrl: './hotel-details.component.scss'
})
export class HotelDetailsComponent {
  hotelDetails: HotelDetails = {
    bookingNumber: '1219624837',
    hotelName: 'Bukit Vipassana Hotel',
    checkIn: 'Kam, 23 Januari 2025, Dari 14:00',
    checkOut: 'Jum, 24 Januari 2025, Sebelum 12:00',
    roomType: '(1x) Superior King Bed Room Only',
    guests: 2,
    beds: 1,
    breakfastIncluded: false,
    amenities: ['WIFI Gratis'],
    specialRequests: '-',
    guestName: 'ssssssss sssssss',
    refundPolicy: ['Tidak Bisa Refund', 'Tidak Bisa Reschedule'],
    orderName: 'ssssssss sssssss',
    orderEmail: 'ssssssss@mail.com',
    orderPhone: '+6212121212222222',
  };
}

interface HotelDetails {
  bookingNumber: string;
  hotelName: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  guests: number;
  beds: number;
  breakfastIncluded: boolean;
  amenities: string[];
  specialRequests: string;
  guestName: string;
  refundPolicy: string[];
  orderName: string;
  orderEmail: string;
  orderPhone: string;
}
