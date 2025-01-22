import { Component, Input } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-hotel-card',
  imports: [NgFor],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.scss',
  providers: [DecimalPipe]
})
export class HotelCardComponent {

  @Input('hotel') public hotel: any;

  constructor(private router: Router) { }

  // hotel: any = {
  //   name: 'Bukit Vipassana Hotel',
  //   rating: 8.4,
  //   reviews: 1200,
  //   location: 'Lembang, Bandung',
  //   price: 368569,
  //   originalPrice: 491125,
  //   discount: 25,
  //   amenities: ['Area main anak', 'Layanan pijat', 'Spa'],
  //   imageUrl: 'img/hotel.jpeg',
  // };

  toDetail(param: any) {
    this.router.navigate(['hotel/detail'], { queryParams: { param: param } })
  }

}
