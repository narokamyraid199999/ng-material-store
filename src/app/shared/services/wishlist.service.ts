import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from 'src/app/interfaces/food';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor() {
    this.updateLocalStorage();
  }

  favFoodsList: BehaviorSubject<Food[]> = new BehaviorSubject([]);
  favFoods: Food[] = [];

  updateLocalStorage(food: Food = {} as Food) {
    if (food?.title?.length > 0) {
      if (localStorage.getItem('wishlist')) {
        this.favFoodsList.next(JSON.parse(localStorage.getItem('wishlist')));
      }
      this.favFoods.unshift(food);
      this.favFoodsList.next(this.favFoods);
      this.favFoodsList.subscribe((data) => {
        localStorage.setItem('wishlist', JSON.stringify(data));
        console.log('food add to wishlist', data);
      });
    } else {
      console.log('in localstorage');
      let localFood: Food[] = [];
      localFood = JSON.parse(localStorage.getItem('wishlist'));
      console.log(localFood);
      this.favFoodsList.next(localFood);
      this.favFoodsList.subscribe((data) => {
        console.log('wishlist from localStorage', data);
      });
    }
  }

  clearCart() {
    localStorage.removeItem('wishlist');
    this.updateLocalStorage();
    this.favFoods = [];
    this.favFoodsList.next(this.favFoods);
  }

  deleteFood(food: Food) {
    let temp: Food[] = JSON.parse(localStorage.getItem('wishlist'));
    let res: Food[] = temp.filter((elm) => elm.id != food.id);
    localStorage.setItem('wishlist', JSON.stringify(res));
    this.favFoodsList.next(res);
  }
}
