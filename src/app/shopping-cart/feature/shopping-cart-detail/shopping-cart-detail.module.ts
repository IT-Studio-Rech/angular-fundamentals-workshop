import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartDetailRoutingModule } from './shopping-cart-detail-routing.module';
import { ShoppingCartDetailComponent } from './shopping-cart-detail.component';


@NgModule({
  declarations: [
    ShoppingCartDetailComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartDetailRoutingModule
  ]
})
export class ShoppingCartDetailModule { }
