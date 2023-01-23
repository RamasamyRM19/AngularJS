import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

/* The LoaderInterceptor class implements the HttpInterceptor interface, and intercepts all HTTP
requests and responses */
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: NgxSpinnerService) { }

  /**
   * The intercept function takes in a request and a next handler, and returns an observable of type
   * HttpEvent
   * 
   * @param request - The HTTP request object
   * @param next - The next interceptor in the chain.
   * @return Observable<HttpEvent<unknown>>
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();
    setTimeout(() => {
      this.loaderService.hide();
    }, 1000);
    return next.handle(request);
  }
}
