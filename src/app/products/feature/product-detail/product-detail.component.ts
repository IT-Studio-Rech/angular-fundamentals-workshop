import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../data-access/product.service';
import { firstValueFrom, Observable } from 'rxjs';
import { Product } from '../product-list/mock/MOCK_PRODUCT_LIST';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product$: Observable<Product> | undefined;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.product$ = this.productService.getProduct(id);
  }

  async addToCart(id: number) {
    const result = await firstValueFrom(
      this.productService.addToCart(id, this.quantity)
    );
    console.log('Product added to shopping cart', result);
  }
}
