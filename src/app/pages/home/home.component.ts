import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { PromotionBannerComponent } from '../../components/promotion-banner/promotion-banner.component';
import { CouponListComponent } from '../../components/coupon-list/coupon-list.component';
import { DestinationCardsComponent } from '../../components/destination-cards/destination-cards.component';
import { TravelOptionsComponent } from '../../components/travel-options/travel-options.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent, PromotionBannerComponent, CouponListComponent, DestinationCardsComponent,
    TravelOptionsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
