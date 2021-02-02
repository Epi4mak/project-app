import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModelsService } from '../models.service';
import { StarBasketService } from '../star-basket.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  models: any[] = []
  sub: Subscription;
  constructor(private router: Router, private actRouter: ActivatedRoute, private modelsService: ModelsService, private starBasketService: StarBasketService) { 
    this.sub = this.actRouter.params.subscribe(p => {
      let number = +p["model_id"];
      if (number === 1) {
        this.models = this.modelsService.menrackets;
      } else if (number === 2) {
        this.models = this.modelsService.menshoes;
      }

      console.log(this.models);
      
    })

  }

  ngOnInit(): void {
  }

  addToStars(model: any): void {
    this.starBasketService.addToStars(model);
  }

  addToBaskets(model: any): void {
    this.starBasketService.addToBaskets(model);
  }
  

}
