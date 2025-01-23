import { NgFor } from '@angular/common';
import { Component, OnInit, Pipe } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { HotelService } from '../../services/hotel.service';
import { ActivatedRoute } from '@angular/router';

interface Hotel {
  name: string;
  rating: number;
  reviews: number;
  location: string;
  images: string[];
  price: number;
  description: string;
  address: string;
  amenities: any[]
}

interface RoomOption {
  name: string;
  description: string;
  guests: number;
  price: number;
  originalPrice: number;
  breakfastIncluded: boolean;
}

interface Room {
  name: string;
  imageUrl: string;
  size: string;
  options: RoomOption[];
}

@Component({
  selector: 'app-produc-details',
  imports: [NgFor, SearchBarComponent],
  templateUrl: './produc-details.component.html',
  styleUrl: './produc-details.component.scss'
})
export class ProducDetailsComponent implements OnInit {

  hotel: Hotel = {
    name: 'Bukit Vipassana Hotel',
    location: 'Lembang, Bandung',
    rating: 8.4,
    reviews: 1160,
    price: 368569,
    images: [
      'img/hotel.jpeg',
      'img/hotel.jpeg',
      'img/hotel.jpeg',
      'img/hotel.jpeg',
      'img/hotel.jpeg',
      'img/hotel.jpeg',
      'img/hotel.jpeg',
    ],
    description: 'Hotel ini menawarkan kenyamanan dan fasilitas terbaik untuk Anda.',
    address: 'JL. Kolonel Masturi No. 99, Lembang, Bandung, Jawa Barat, Indonesia, 40391',
    amenities: ['Restoran', 'Kolam Renang', 'Resepsionis 24 Jam', 'WiFi', 'Parkir'],

  };


  room: Room = {
    name: 'Superior Twin Bed',
    imageUrl: 'img/hotel.jpeg',
    size: '24.0 m²',
    options: [
      {
        name: 'Tanpa Sarapan',
        description: '1 ranjang twin',
        guests: 2,
        price: 368569,
        originalPrice: 491125,
        breakfastIncluded: false,
      },
      {
        name: 'Termasuk sarapan untuk 1 orang',
        description: '1 ranjang twin',
        guests: 1,
        price: 417709,
        originalPrice: 556945,
        breakfastIncluded: true,
      },
    ],
  };


  constructor(private hotelService: HotelService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(res => {
      // res['param']
      let result = this.hotelService.filterHotels(res['param'])
      this.hotel.name = result[0].name
      this.hotel.location = result[0].location

    })
    // this.hotelService.filterHotels('')
  }

}
