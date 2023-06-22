import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './mock/MOCK_PRODUCT_LIST';
import {ProductService} from "../../data-access/product.service";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  @ViewChild('searchKeyInput') myInput!: ElementRef<HTMLInputElement>;

  public searchKey: string = '';
  public searchTags: string[] = [];
  public searchedProducts: Product[] = [];
  public allTags: string[] = [];
  public productTags: string[] = [];

  constructor(private _http: HttpClient, private _productService: ProductService) {
  }

  ngOnInit(): void {
    firstValueFrom(this._productService.getProducts()).then((products: Product[]) => {
      this.searchedProducts = products;
      this.allTags = this.getTagsFromProducts();
      this.productTags = this.allTags;
    });
  }

  ngAfterViewInit() {
    this.myInput.nativeElement.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        this.filterProducts();
      }
    });
  }

  getTagsFromProducts(): string[] {
    const tagsSet = new Set<string>();
    this.searchedProducts.forEach(product => {
      product.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }

  filterProducts(): void {
    const searchKey = this.searchKey.trim().toLowerCase() || '';

    firstValueFrom(this._productService.getProducts()).then((products: Product[]) => {
      this.searchedProducts = products.filter(product => {
        const tagsMatch = this.searchTags.length === 0 || this.searchTags.every(tag => product.tags.includes(tag));
        const searchTermMatch =
          product.name.toLowerCase().includes(searchKey) ||
          product.description.toLowerCase().includes(searchKey);
        return tagsMatch && searchTermMatch;
      });
      this.productTags = this.getTagsFromProducts();
    });
  }

  selectedTagsChanged(tag: string): void {
    const index: number = this.searchTags.indexOf(tag);
    if (index > -1) {
      // Remove Tag from list
      this.searchTags.splice(index, 1);
    } else {
      // Add Tag to list
      this.searchTags.push(tag);
    }
    this.filterProducts();
  }
}
