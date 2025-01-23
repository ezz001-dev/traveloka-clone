import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-card',
  imports: [],
  templateUrl: './booking-card.component.html',
  styleUrl: './booking-card.component.scss'
})
export class BookingCardComponent {

  booking: Booking = {
    hotelName: 'Bukit Vipassana Hotel',
    rating: 8.4,
    reviews: 1160,
    imageUrl: 'img/hotel.jpeg',
    checkIn: 'Kam, 23 Jan 2025',
    checkOut: 'Jum, 24 Jan 2025',
    roomType: '(1x) Superior King Bed',
    guests: 2,
    beds: 1,
    breakfastIncluded: false,
    totalPrice: 450023,
    originalPrice: 600030,
  };
}

interface Booking {
  hotelName: string;
  rating: number;
  reviews: number;
  imageUrl: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  guests: number;
  beds: number;
  breakfastIncluded: boolean;
  totalPrice: number;
  originalPrice: number;
}
