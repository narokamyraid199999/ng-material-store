import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/interfaces/food';
import { FoodsService } from 'src/app/shared/services/foods.service';
import { NgxSpinnerService } from 'ngx-spinner';
import AOS from 'aos'; //AOS -
import { CategoryService } from 'src/app/shared/services/category.service';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
})
export class FoodsComponent implements OnInit {
  constructor(
    private _foodService: FoodsService,
    private _spinnerService: NgxSpinnerService,
    private _categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    AOS.init({ disable: 'mobile' }); //AOS - 2

    AOS.refresh(); //refresh method is called on wi
    this._spinnerService.show();
    this.getAllRecipes();
    this.getAllCategories();
  }

  foods: Food[] = [];
  categories: Category[] = [];
  searchWord: string = '';
  filterCategory: string = '';
  minPriceRange: string = '';
  maxPriceRange: string = '';

  getAllCategories() {
    this._categoryService.getAllCategory().subscribe({
      next: (data: Category[]) => {
        this.categories = data;
        console.log(this.categories);
      },
    });
  }

  getAllRecipes() {
    if (this._foodService.foods.length == 0) {
      this._foodService.getAllProducts().subscribe({
        next: (data: Food[]) => {
          this.foods = data;
          this._foodService.foods = data;
          this._spinnerService.hide();
        },
        error: (error) => {
          console.log('error in getting the food recipes', error);
        },
      });
    } else {
      this.foods = this._foodService.foods;
      this._spinnerService.hide();
    }
  }

  filterByCategory(category: string) {
    this.foods = this._foodService.foods;
    if (category.toLowerCase().includes('all')) {
      this.foods = this._foodService.foods;
    } else {
      this._foodService.filterdFood = this.foods.filter(
        (food) => food.category.name.toLowerCase() == category.toLowerCase()
      );
      this.foods = this._foodService.filterdFood;
    }
  }

  filterByPrice() {
    this.foods = this.foods.filter(
      (food) =>
        food.price >= parseInt(this.minPriceRange) &&
        food.price <= parseInt(this.maxPriceRange)
    );
  }

  filter() {
    if (this.filterCategory) {
      this.filterByCategory(this.filterCategory);
    }
    if (
      this.minPriceRange ||
      (this.maxPriceRange &&
        parseInt(this.minPriceRange) < parseInt(this.maxPriceRange))
    ) {
      if (!this.filterCategory || this.categories.length < 1) {
        this.filterByCategory('all');
      }
      this.filterByPrice();
    }
  }

  getSearch(searchWord: string) {
    this.searchWord = searchWord;
  }
}
