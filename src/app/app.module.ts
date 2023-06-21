import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadlineComponent } from './shared/ui/component/headline/headline.component';
import { MockProductListInterceptor } from './products/feature/product-list/mock/mock-product-list.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MockProductInterceptor } from './products/feature/product-detail/mock/mock-product-interceptor.service';
import { MockShoppingCartInterceptor } from './shopping-cart/feature/shopping-cart-detail/mock/mock-shopping-cart.interceptor';
import { MockProfileDetailsInterceptor } from './profile/feature/profile-detail/mock/mock-profile-details-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeadlineComponent,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockProductListInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockProductInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockShoppingCartInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockProfileDetailsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
