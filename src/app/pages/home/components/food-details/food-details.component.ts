import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Food } from 'src/app/interfaces/food';
import { CartService } from 'src/app/shared/services/cart.service';
import { FoodsService } from 'src/app/shared/services/foods.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css'],
})
export class FoodDetailsComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Food,
    private _foodService: FoodsService,
    private _cartService: CartService,
    private _wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.getRelatedProducts();
  }

  addLoader: boolean = false;

  getRelatedProducts() {
    if (this._foodService.foods.length > 1) {
      this.relatedFood = this._foodService.foods.filter(
        (food) => food.category.name == this.data.category.name
      );
    } else {
      this._foodService.getAllProducts().subscribe({
        next: (data: Food[]) => {
          this.relatedFood = data.filter(
            (food) => food.category.name == this.data.category.name
          );
        },
      });
    }
  }

  relatedFood: Food[] = [];

  numOfProduct: number = 1;

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

  addToCart(food: Food) {
    // !this.addLoader ? (this.addLoader = true) : (this.addLoader = false);
    this.addLoader = true;
    food.numberOfItem = this.numOfProduct;
    this._cartService.updateLocalStorage(food);
    this.addLoader = false;
  }

  addToWishlist(food: Food) {
    // !this.addLoader ? (this.addLoader = true) : (this.addLoader = false);
    this.addLoader = true;
    food.numberOfItem = this.numOfProduct;
    this._wishlistService.updateLocalStorage(food);
    this.addLoader = false;
  }
}
