import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../products/feature/product-list/mock/MOCK_PRODUCT_LIST";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }

  getShoppingCart() {
    return this.http.get<{ product: Product; quantity: number }[]>('/cart');
  }

  editProductQuantity(productId: number | undefined, quantity: number) {
    return this.http.post('/cart/edit', JSON.stringify({ productId, quantity }));
  }

  removeProduct(productId: number | undefined) {
    return this.http.delete('/cart/remove', { body: JSON.stringify({ productId }) });
  }
}
