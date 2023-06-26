import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../products/data-access/mock/MOCK_PRODUCT_LIST';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private http: HttpClient) {}

  // TODO: return type of function and getShoppingCart$
  getShoppingCart() {
    return this.http.get<{ product: Product; quantity: number }[]>('/cart');
  }

  // TODO: return type of function && $ to indicate return type is observable
  editProductQuantity(productId: number | undefined, quantity: number) {
    return this.http.post(
      '/cart/edit',
      JSON.stringify({ productId, quantity })
    );
  }

  // TODO: return type of function && $ to indicate return type is observable
  removeProduct(productId: number | undefined) {
    return this.http.delete('/cart/remove', {
      body: JSON.stringify({ productId }),
    });
  }
}
