import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css'],
})
export class CategorySliderComponent implements OnInit {
  constructor(private _categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  categories: Category[] = [];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    mouseDrag: true,
    margin: 25,
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
        items: 6,
      },
    },
    nav: true,
  };

  getAllCategories() {
    this._categoryService.getAllCategory().subscribe({
      next: (data: Category[]) => {
        this.categories = data;
        console.log(this.categories);
      },
      error: (error) => {
        console.log('error gettitn the categoryies', error);
      },
    });
  }
}
