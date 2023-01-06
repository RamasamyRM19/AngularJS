import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Menu } from './bottom-component/bottom-left-bar/menu';
import { Task } from './bottom-component/bottom-center-bar/task';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = "http://localhost:8080/todo/"

  constructor(private httpClient: HttpClient) { 
  }

  getCategories(): Observable<Object> {
    return this.httpClient.get(this.baseUrl + "categories");
  }

  postCategories(category: Menu): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(category);
    return this.httpClient.post<any>(this.baseUrl + "category", body,{'headers':headers});
  }

  getTasks(): Observable<Object> {
    return this.httpClient.get(this.baseUrl + "tasks");
  }

  postTasks(task: Task): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(task);
    console.log(task)
    return this.httpClient.post<any>(this.baseUrl + "task", body,{'headers':headers});
  }

}