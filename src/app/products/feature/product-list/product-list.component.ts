import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './mock/MOCK_PRODUCT_LIST';
import {combineLatest, map, Observable, shareReplay, startWith, tap} from 'rxjs';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatChipSelectionChange} from "@angular/material/chips";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  public searchGroup: FormGroup;
  public searchedProducts$: Observable<Product[]>;
  public productTags$: Observable<string[]>;

  constructor(private _fb: FormBuilder, private _http: HttpClient) {
    this.searchGroup = this._fb.group({
      searchKey: ['', Validators.required],
      searchTags: [[]]
    });

    const products$ = this._http.get<Product[]>('/products');
    const formGroupValueChanges = this.searchGroup.valueChanges.pipe(
      startWith({
        searchKey: '',
        searchTags: []
      }));

    this.searchedProducts$ = combineLatest([
      products$,
      formGroupValueChanges
    ]).pipe(
      map(([products, formGroupValue]) =>
        products
          .filter(product => !!formGroupValue.searchTags.length ?
            formGroupValue.searchTags.every((tag: any) => product.tags.includes(tag)) : true)
          .filter(product => product.name.toLocaleLowerCase().includes(formGroupValue.searchKey) ||
            product.description.toLocaleLowerCase().includes(formGroupValue.searchKey))),
      shareReplay({ refCount: false, bufferSize: 1 }),
    );

    this.productTags$ = this.searchedProducts$.pipe(
      map(searchedProducts => searchedProducts.map(product => product.tags).flat()),
      map(tags => [...new Set(tags)]),
      tap(tags => console.log('####### tags', tags))
    );
  }

  selectedTagsChanged(change: MatChipSelectionChange) {
    const searchTagsFormArray: FormArray = this.searchGroup.get('searchTags') as FormArray;
    const currentTagList: string[] = searchTagsFormArray.value;
    if (change.selected) {
      // Add Tag to list
      searchTagsFormArray.patchValue([...currentTagList, change.source.value]);
    } else {
      // Remove Tag from list
      searchTagsFormArray.patchValue(currentTagList.filter(tag => tag !== change.source.value));
    }
  }
}
