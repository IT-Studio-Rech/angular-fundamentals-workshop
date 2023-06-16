import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { MOCK_PRODUCTS } from '../../product-list/mock/MOCK_PRODUCT_LIST';

@Injectable()
export class MockProductInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('######### MockProductInterceptor');
    if (request.method === 'GET' && request.url.includes('/product/')) {
      // Extrahieren Sie die Produkt-ID aus der URL
      const id = Number.parseInt((request.url.split('/')?.pop() || '1'));

      // Verzögern Sie die Antwort um 500 ms, um den Effekt einer echten Serverantwort zu simulieren
      return of(new HttpResponse({ status: 200, body: MOCK_PRODUCTS().find(product => product.id == id) })).pipe(delay(500));
    }

    // Lassen Sie andere Anfragen unverändert passieren
    return next.handle(request);
  }
}
