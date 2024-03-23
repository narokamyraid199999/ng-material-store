import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from 'src/app/interfaces/food';

@Injectable({
  providedIn: 'root',
})
export class FoodsService {
  constructor(private httpClient: HttpClient) {}

  foods: Food[] = [];
  filterdFood: Food[] = [];
  favFoods: Food[] = [];

  getAllProducts(): Observable<any> {
    return this.httpClient.get(
      'https://api.escuelajs.co/api/v1/products?offset=0&limit=35'
    );
  }

  getProductNumber(productNumber: string): Observable<any> {
    return this.httpClient.get(
      `https://api.escuelajs.co/api/v1/products?offset=0&limit=${productNumber}`
    );
  }
}
