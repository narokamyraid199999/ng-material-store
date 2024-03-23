import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Food } from 'src/app/interfaces/food';
import { FoodsService } from 'src/app/shared/services/foods.service';
import { FoodDetailsComponent } from '../food-details/food-details.component';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css'],
})
export class FoodItemComponent implements OnInit {
  constructor(
    private _foodService: FoodsService,
    public matDialog: MatDialog,
    private _cartService: CartService,
    private _wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.getFavFood();
  }

  getFavFood() {
    if (this._foodService.favFoods.length > 0) {
      this._foodService.favFoods.forEach((food) => {
        if (food.id == this.food.id) {
          console.log('matched');
          this.favStatus = true;
        }
      });
    }
  }

  @Input()
  food: Food = {} as Food;

  favStatus: boolean = false;

  changeFavStatus(food: Food) {
    if (food.isFavarite) {
      food.isFavarite = false;
      this._wishlistService.deleteFood(food);
    } else {
      food.isFavarite = true;
      this._wishlistService.updateLocalStorage(food);
    }
  }

  openFoodDialog() {
    this.matDialog.open(FoodDetailsComponent, {
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '300ms',
      data: this.food,
    });
  }

  addToCart(food: Food) {
    food.numberOfItem = 1;
    this._cartService.updateLocalStorage(food);
  }
}
