import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from 'src/app/interfaces/food';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {
    this.updateLocalStorage();
  }

  foodList: BehaviorSubject<Food[]> = new BehaviorSubject([]);
  food: Food[] = [];

  updateLocalStorage(food: Food = {} as Food) {
    if (food?.title?.length > 0) {
      if (localStorage.getItem('products')) {
        this.foodList.next(JSON.parse(localStorage.getItem('products')));
      }
      this.food.unshift(food);
      this.foodList.next(this.food);
      this.foodList.subscribe((data) => {
        localStorage.setItem('products', JSON.stringify(data));
        console.log('food add to localStorage', data);
      });
    } else {
      console.log('in localstorage');
      let localFood: Food[] = [];
      localFood = JSON.parse(localStorage.getItem('products'));
      console.log(localFood);
      this.foodList.next(localFood);
      this.foodList.subscribe((data) => {
        console.log('food from localStorage', data);
      });
    }
  }

  clearCart() {
    localStorage.removeItem('products');
    this.updateLocalStorage();
    this.food = [];
    this.foodList.next(this.food);
  }

  deleteFood(food: Food) {
    let temp: Food[] = JSON.parse(localStorage.getItem('products'));
    let res: Food[] = temp.filter((elm) => elm.id != food.id);
    localStorage.setItem('products', JSON.stringify(res));
    this.foodList.next(res);
  }
}
