import { Component, OnInit } from '@angular/core';
import { StarBasketService } from '../star-basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  baskets: any[];
  constructor(private starBasketService: StarBasketService) {

    this.baskets = this.starBasketService.getList(this.starBasketService.keyBaskets);
  }

  ngOnInit(): void {
  }

  removeFromBaskets(model: any): void {
    this.starBasketService.removeFromBaskets(model);
    this.baskets = this.starBasketService.getList(this.starBasketService.keyBaskets);
  }

  addToStars(model: any): void {
    this.starBasketService.addToStars(model);
  }
}
