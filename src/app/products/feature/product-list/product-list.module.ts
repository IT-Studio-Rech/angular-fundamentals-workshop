import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductListRoutingModule} from './product-list-routing.module';
import {ProductListComponent} from './product-list.component';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    FormsModule,
    MatCardModule,
  ]
})
export class ProductListModule {
}
