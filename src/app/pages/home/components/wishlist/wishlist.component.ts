import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Food } from 'src/app/interfaces/food';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  constructor(private _wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.getAllFavFoods();
  }

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

  foods: Food[] = [];

  getAllFavFoods() {
    this._wishlistService.favFoodsList.subscribe((data) => {
      this.foods = data;
      console.log(this.foods);
    });
  }

  delete(food: Food) {
    // food.isFavarite = false;
    this._wishlistService.deleteFood(food);
  }

  clear() {
    this._wishlistService.clearCart();
    this.foods = [];
  }
}
