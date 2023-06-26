import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './mock/MOCK_PRODUCT_LIST';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = '/product';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productUrl}/list`);
  }

  getProduct(id: string | null): Observable<Product> {
    return this.http.get<Product>(`${this.productUrl}/${id}`);
  }

  addToCart(productId: number, quantity: number) {
    // Kontextbruch
    // Kontextbruch
    // ggf. eigenen Service unter shared, ein feature darf nicht auf das andere zugreifen
    return this.http.post('/cart/add', { productId, quantity });
  }
}
