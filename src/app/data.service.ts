import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Menu } from './bottom-component/bottom-left-bar/menu';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = "http://localhost:8080/todo/"

  constructor(private http: HttpClient) { 
  }

  getCategories(): Observable<Object> {
    return this.http.get(this.baseUrl + "categories");
    //console.log(this.baseUrl+ "categories");
  }

  postCategories(category: Menu): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(category);
    //console.log(body)
    return this.http.post<any>(this.baseUrl + "category", body,{'headers':headers});
  }

  // public saveUser(category: Menu): Observable<any> {
  //   const url = 'https://reqres.in/api/users';
  //   return this.http.post<any>(url, category);
  // }
}