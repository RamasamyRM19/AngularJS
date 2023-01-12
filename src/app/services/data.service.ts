import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Menu } from '../bottom-component/category/menu';
import { Task } from '../bottom-component/task-list/task';
import { Constant } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public constant = new Constant();

  constructor(private httpClient: HttpClient) { 
  }

  getCategories(): Observable<Object> {
    return this.httpClient.get(this.constant.BASEURL + "categories");
  }

  postCategories(category: Menu): Observable<any> {
    const body=JSON.stringify(category);
    return this.httpClient.post<any>(this.constant.BASEURL + "category", body, {'headers':this.constant.HEADERS});
  }

  getTasks(): Observable<Object> {
    return this.httpClient.get(this.constant.BASEURL + "tasks");
  }

  postTasks(task: Task): Observable<any> {
    const body=JSON.stringify(task);
    console.log(task)
    return this.httpClient.post<any>(this.constant.BASEURL + "task", body, {'headers':this.constant.HEADERS});
  }

  getTaskById(id: number): Observable<Object> {
    return this.httpClient.get(this.constant.BASEURL + "task/" + id);
  } 

}