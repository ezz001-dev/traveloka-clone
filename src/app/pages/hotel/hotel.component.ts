import { Component, OnInit } from '@angular/core';
import { HotelCardComponent } from '../../components/hotel-card/hotel-card.component';
import { AccordionFilterComponent } from '../../components/accordion-filter/accordion-filter.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-hotel',
  imports: [
    HotelCardComponent,
    AccordionFilterComponent,
    SearchBarComponent
  ],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.scss'
})
export class HotelComponent implements OnInit {

  hotels: any[] = []
  constructor(private hotelService: HotelService) { }


  ngOnInit(): void {
    this.hotelService.hotelState.subscribe(res => {
      this.hotels = res;
    })
  }

  getSearchVal(event: any) {
    if (event) {
      let result = this.hotelService.filterHotels(event.name)
      console.log(result)
      this.hotels = result;
    }
  }

}
