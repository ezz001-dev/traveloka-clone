import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Destination {
  name: string;
  accommodations: number;
  imageUrl: string;
}

@Component({
  selector: 'app-destination-cards',
  imports: [NgFor],
  templateUrl: './destination-cards.component.html',
  styleUrl: './destination-cards.component.scss'
})
export class DestinationCardsComponent {
  destinations: Destination[] = [
    {
      name: 'Singapura',
      accommodations: 644,
      imageUrl: 'img/singapure.webp',
    },
    {
      name: 'Malaysia',
      accommodations: 8371,
      imageUrl: 'img/singapure.webp',
    },
    {
      name: 'Thailand',
      accommodations: 27449,
      imageUrl: 'img/singapure.webp',
    },
    {
      name: 'Korea Selatan',
      accommodations: 15929,
      imageUrl: 'img/singapure.webp',
    },
    {
      name: 'Jepang',
      accommodations: 28141,
      imageUrl: 'img/singapure.webp',
    },
    {
      name: 'Hong Kong',
      accommodations: 960,
      imageUrl: 'img/singapure.webp',
    },
  ];
}
