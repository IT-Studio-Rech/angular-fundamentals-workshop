import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './mock/MOCK_PRODUCT_LIST';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  public products$: Observable<Product[]>

  constructor(private _http: HttpClient) {
    this.products$ = this._http.get<Product[]>('/products');
  }
}
