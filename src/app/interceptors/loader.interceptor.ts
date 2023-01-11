import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.loaderService.show()
    return next.handle(req).pipe(
      finalize(() => this.loaderService.hide())
    );

  }
  
    // setTimeout(() => {
    //   this.loaderService.hide();
    // }, 5000);
  }
