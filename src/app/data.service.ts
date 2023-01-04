import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from './bottom-component/bottom-left-bar/menu';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  // get_categories(): Observable<{ id: number; title: string }[]> {
  //   //return this.httpClient.get(this.baseUrl + '/categories');
  //   return this.httpClient.get('http://localhost:3000/categories');
  // }

  public getCategories(): Observable<Menu> {
    const url = 'http://localhost:3000/categories';
    return this.httpClient.get<Menu>(url);
}

}