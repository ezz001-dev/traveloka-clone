import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { PromotionBannerComponent } from '../../components/promotion-banner/promotion-banner.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent, PromotionBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
