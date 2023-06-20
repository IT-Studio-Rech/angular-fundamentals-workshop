import {Component} from '@angular/core';
import {BehaviorSubject, firstValueFrom, map, Observable, switchMap, tap} from "rxjs";
import {Product} from "../../../products/feature/product-list/mock/MOCK_PRODUCT_LIST";
import {ShoppingCartService} from "../../data-access/shopping-cart.service";

@Component({
  selector: 'app-shopping-cart-detail',
  templateUrl: './shopping-cart-detail.component.html',
  styleUrls: ['./shopping-cart-detail.component.scss']
})
export class ShoppingCartDetailComponent {

  private refreshData$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public cartItems$: Observable<{ product: Product; quantity: number }[]> | undefined;
  public totalPrice$: Observable<number> | undefined;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.cartItems$ = this.refreshData$.pipe(
      switchMap(() => this.shoppingCartService.getShoppingCart())
    );

    this.totalPrice$ = this.cartItems$.pipe(
      map(cartItems => cartItems.map(item => item.product.price * item.quantity)
        .reduce((previousValue, currentValue) => previousValue += currentValue)),
      tap(console.log)
    )
  }

  onEditProductQuantity(productId: number | undefined, quantity: number): void {
    firstValueFrom(this.shoppingCartService.editProductQuantity(productId, quantity)).then(() => this.refreshData$.next(true));
  }

  onRemoveProduct(productId: number | undefined): void {
    firstValueFrom(this.shoppingCartService.removeProduct(productId)).then(() => this.refreshData$.next(true));
  }

  onCompletePurchase() {
    console.log('########## onCompletePurchase');
  }
}