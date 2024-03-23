import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Food } from 'src/app/interfaces/food';

@Component({
  selector: 'app-related-food',
  templateUrl: './related-food.component.html',
  styleUrls: ['./related-food.component.css'],
})
export class RelatedFoodComponent {
  @Input()
  foods: Food[] = [];
  customOptions: OwlOptions = {
    loop: true,
    margin: 15,
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
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
