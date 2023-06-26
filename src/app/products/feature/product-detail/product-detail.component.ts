import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MOCK_PRODUCTS, Product} from '../../data-access/mock/MOCK_PRODUCT_LIST';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product: Product | undefined;
  public quantity: number = 1;

  constructor(private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    if (!!id) {
      this.product = MOCK_PRODUCTS().find(product => product.id === Number.parseInt(id));
    }
  }

  async addToCart(id: number) {
    console.log('Shopping-cart add product with id', id);
  }
}
