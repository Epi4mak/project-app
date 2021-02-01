import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarBasketService {
  keyStars: string = "stars";
  keyBaskets: string = "baskets";
  constructor() { }
  stars: any[] = [];
  baskets: any[] = [];

  addToStars(model: any): void {
    this.stars.push(model);
    this.saveToLocalStorage(this.stars, this.keyStars);
  }

  addToBaskets(model: any): void {
    this.baskets.push(model);
    this.saveToLocalStorage(this.baskets, this.keyBaskets);
  }

  removeFromStars(model: any): void {
    const index = this.stars.indexOf(model, 0);
    if (index > -1) {
      this.stars.splice(index, 1);
    }
    this.saveToLocalStorage(this.stars, this.keyStars);
  }

  removeFromBaskets(model: any): void {
    const index = this.baskets.indexOf(model, 0);
    if (index > -1) {
      this.baskets.splice(index, 1);
    }
    this.saveToLocalStorage(this.baskets, this.keyBaskets);
  }

  saveToLocalStorage(list: any[], key: string): void {
    let jsonString = JSON.stringify(list);
    localStorage.setItem(key, jsonString);
  }

  getList(key: string): any[] {
    let jsonString = localStorage.getItem(key);
    if (jsonString) {
      let list = JSON.parse(jsonString);
      if (list) {
        if (key === this.keyStars) {
          this.stars = list;
          return this.stars;
        } else if (key === this.keyBaskets) {
          this.baskets = list;
          return this.baskets;
        }
      }
    }
    return [];
  }
}
