import {Component, OnInit} from '@angular/core';
import {Product} from '../../data-access/mock/MOCK_PRODUCT_LIST';
import {ProductService} from '../../data-access/product.service';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  public searchedProducts: Product[] = [];

  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {
    firstValueFrom(this._productService.getProducts$()).then(
      (products: Product[]) => {
        this.searchedProducts = products;
      }
    );
  }
}
