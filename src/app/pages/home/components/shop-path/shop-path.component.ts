import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-path',
  templateUrl: './shop-path.component.html',
  styleUrls: ['./shop-path.component.css'],
})
export class ShopPathComponent {
  constructor(private ActiveRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getCurrentPath();
  }

  @Input()
  title: string = 'shop';

  currentRoute: string = '';

  getCurrentPath() {
    this.currentRoute = this.ActiveRoute.snapshot.url.join('/');
    console.log(this.currentRoute);
  }
}
