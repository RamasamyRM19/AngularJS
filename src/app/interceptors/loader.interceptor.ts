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

  /**
   * The constructor function is a default function of the class. It is called when an instance of the
   * class is created. The constructor function is used to initialize class members
   * @param {NgxSpinnerService} loaderService - This is the service that we imported from ngx-spinner.
   */
  constructor(private loaderService: NgxSpinnerService) { }

  /**
   * The intercept function takes in a request and a next handler, and returns an observable of type
   * HttpEvent
   * @param request - HttpRequest<unknown> - The request object
   * @param {HttpHandler} next - The next interceptor in the chain.
   * @returns Observable<HttpEvent<unknown>>
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.show();
    setTimeout(() => {
      this.loaderService.hide();
    }, 1000);
    return next.handle(request);
  }
}
