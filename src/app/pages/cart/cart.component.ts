import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Food } from 'src/app/interfaces/food';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this.getAllfood();
    console.log('foods from cart', this.foods);
  }

  foods: Food[] = [];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };

  getAllfood() {
    this._cartService.foodList.subscribe((data) => {
      this.foods = data;
    });
  }

  totalPrice(): number {
    let totalPrice = 0;
    this.foods.forEach((food) => {
      if (food?.numberOfItem) {
        totalPrice += food?.numberOfItem * food.price;
      } else {
        totalPrice += food.price;
      }
    });
    return totalPrice;
  }
  clear() {
    this._cartService.clearCart();
    this.foods = [];
  }

  delete(food: Food) {
    this._cartService.deleteFood(food);
  }
}
