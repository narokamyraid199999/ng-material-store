import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/interfaces/food';
import { FoodsService } from 'src/app/shared/services/foods.service';
import { NgxSpinnerService } from 'ngx-spinner';
import AOS from 'aos';

@Component({
  selector: 'app-categotys',
  templateUrl: './categotys.component.html',
  styleUrls: ['./categotys.component.css'],
})
export class CategotysComponent implements OnInit {
  constructor(
    private _foodService: FoodsService,
    private activeRouter: ActivatedRoute,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();
    this.getFoods();
    AOS.init();
    AOS.refresh();
  }

  getFoods() {
    this.category = this.activeRouter.snapshot.params['id'];
    console.log(this.category);
    if (this._foodService.foods.length > 1) {
      this.foods = this._foodService.foods.filter(
        (food) =>
          food.category.name.toLowerCase() == this.category.toLowerCase()
      );
      this.spinnerService.hide();
    } else {
      this._foodService.getAllProducts().subscribe({
        next: (data: Food[]) => {
          this._foodService.foods = data;
          this.foods = data.filter(
            (food) =>
              food.category.name.toLowerCase() == this.category.toLowerCase()
          );
          this.spinnerService.hide();
        },
      });
    }
  }

  category: string = '';

  foods: Food[] = [];
}
