import {Component} from '@angular/core';
import {MOCK_PRODUCTS, Product} from "../../data-access/mock/MOCK_PRODUCT_LIST";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {

  public searchedProducts: Product[] = [];
  constructor() {
    this.searchedProducts = MOCK_PRODUCTS();
  }

}
