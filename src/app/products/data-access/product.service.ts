import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from "../feature/product-list/mock/MOCK_PRODUCT_LIST";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = '/product';

  constructor(private http: HttpClient) { }

  getProduct(id: string | null): Observable<Product> {
    return this.http.get<Product>(`${this.productUrl}/${id}`);
  }

  addToCart(productId: number, quantity: number) {
    return this.http.post('/cart/add', { productId, quantity });
  }
}
