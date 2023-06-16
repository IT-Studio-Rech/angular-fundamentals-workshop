import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductDetailRoutingModule,
    MatCardModule,
    MatInputModule
  ]
})
export class ProductDetailModule { }
