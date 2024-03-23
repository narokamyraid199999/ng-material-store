import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css'],
})
export class SearchProductsComponent {
  searchWord: string = '';

  @Output()
  searchEvent: EventEmitter<string> = new EventEmitter();

  getSearchValue() {
    this.searchEvent.emit(this.searchWord);
  }
}
