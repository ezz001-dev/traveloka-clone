import { Component } from '@angular/core';
import { HotelCardComponent } from '../../components/hotel-card/hotel-card.component';
import { AccordionFilterComponent } from '../../components/accordion-filter/accordion-filter.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

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
export class HotelComponent {

}
