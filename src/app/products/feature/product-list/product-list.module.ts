import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductListRoutingModule} from './product-list-routing.module';
import {ProductListComponent} from './product-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule
  ]
})
export class ProductListModule {
}
