import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  categories: Category[] = [];

  getAllCategory(): Observable<any> {
    return this.httpClient.get('https://api.escuelajs.co/api/v1/categories');
  }
}
