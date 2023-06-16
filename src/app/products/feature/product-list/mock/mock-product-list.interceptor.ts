import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { MOCK_PRODUCTS } from './MOCK_PRODUCT_LIST';

@Injectable()
export class MockProductListInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'GET' && request.url.endsWith('/products')) {
      // Verzögern Sie die Antwort um 500 ms, um den Effekt einer echten Serverantwort zu simulieren
      return of(new HttpResponse({ status: 200, body: MOCK_PRODUCTS() })).pipe(delay(500));
    }

    // Lassen Sie andere Anfragen unverändert passieren
    return next.handle(request);
  }
}
