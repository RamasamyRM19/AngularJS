import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading = new Subject<boolean>();

  constructor() {
  }

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }

  
}
