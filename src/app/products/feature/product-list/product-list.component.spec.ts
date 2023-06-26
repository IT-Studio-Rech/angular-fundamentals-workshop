import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ProductListComponent} from './product-list.component';
import {Product} from '../../data-access/mock/MOCK_PRODUCT_LIST';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProductListComponent],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch products and assign them to searchedProducts', async () => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Product 1',
        price: 10,
        tags: ['tag1', 'tag2'],
        description: 'Product 1 description',
        parameters: [
          {key: 'param1', value: 'value1'},
          {key: 'param2', value: 'value2'},
        ],
        deliveryDate: '2023-06-01',
        imageUrl: 'product1.jpg',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 20,
        tags: ['tag3', 'tag4'],
        description: 'Product 2 description',
        parameters: [
          {key: 'param3', value: 'value3'},
          {key: 'param4', value: 'value4'},
        ],
        deliveryDate: '2023-06-02',
        imageUrl: 'product2.jpg',
      },
    ];

    expect(component.searchedProducts).toEqual(mockProducts);
  });

});
