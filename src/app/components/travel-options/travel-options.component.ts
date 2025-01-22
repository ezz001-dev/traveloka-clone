import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface TravelOption {
  title: string;
  imageUrl: string;
}

@Component({
  selector: 'app-travel-options',
  imports: [NgFor],
  templateUrl: './travel-options.component.html',
  styleUrl: './travel-options.component.scss'
})
export class TravelOptionsComponent {
  travelOptions: TravelOption[] = [
    {
      title: 'Kapal Pesiar',
      imageUrl: 'https://via.placeholder.com/300x200?text=Kapal+Pesiar',
    },
    {
      title: 'Fun Activities',
      imageUrl: 'https://via.placeholder.com/300x200?text=Fun+Activities',
    },
    {
      title: 'Travel Insurance',
      imageUrl: 'https://via.placeholder.com/300x200?text=Travel+Insurance',
    },
    {
      title: 'TPayLater',
      imageUrl: 'https://via.placeholder.com/300x200?text=TPayLater',
    },
  ];
}
