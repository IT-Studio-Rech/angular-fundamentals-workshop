import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../data-access/product.service';
import { Observable } from 'rxjs';
import { Product } from '../product-list/mock/MOCK_PRODUCT_LIST';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  public product$: Observable<Product> | undefined;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.product$ = this.productService.getProduct(id);
  }

  addToCart(id: number) {
    this.productService.addToCart(id, this.quantity).subscribe();
  }
}
