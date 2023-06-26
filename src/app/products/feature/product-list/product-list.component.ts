import {Component, OnInit} from '@angular/core';
import {MOCK_PRODUCTS, Product} from '../../data-access/mock/MOCK_PRODUCT_LIST';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  public searchedProducts: Product[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.searchedProducts = MOCK_PRODUCTS()
  }
}
