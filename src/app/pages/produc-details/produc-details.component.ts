import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { HotelService } from '../../services/hotel.service';
import { ActivatedRoute } from '@angular/router';

interface Hotel {
  name: string;
  location: string;
  images: string[];
  description: string;
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
