import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

interface Hotel {
  name: string;
  rating: number;
  reviews: number;
  location: string;
  price: number;
  originalPrice: number;
  discount: number;
  amenities: string[];
  imageUrl: string;
}

@Component({
  selector: 'app-hotel-card',
  imports: [],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.scss',
  providers: [DecimalPipe]
})
export class HotelCardComponent {

  hotel: Hotel = {
    name: 'Bukit Vipassana Hotel',
    rating: 8.4,
    reviews: 1200,
    location: 'Lembang, Bandung',
    price: 368569,
    originalPrice: 491125,
    discount: 25,
    amenities: ['Area main anak', 'Layanan pijat', 'Spa'],
    imageUrl: 'img/hotel.jpeg',
  };

}
