import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../category-task-component/category/menu';
import { Task } from '../category-task-component/task-list/task';
import { Constant } from '../constant';

@Injectable({
  providedIn: 'root'
})

/* It's a service class that makes HTTP requests to the backend */
export class DataService {

  public constant = new Constant();

  constructor(private httpClient: HttpClient) {
  }

  /**
   * It returns an observable of type object
   * 
   * @return Observable<Object>
   */
  public getCategories(): Observable<Object> {
    return this.httpClient.get(this.constant.BASEURL + "categories");
  }

  /**
   * This function takes a category object as a parameter and returns an observable of type any
   * 
   * @param category - Menu
   * @returns Observable<any>
   */
  public postCategories(category: Menu): Observable<any> {
    const body = JSON.stringify(category);
    return this.httpClient.post<any>(this.constant.BASEURL + "category", body, { 'headers': this.constant.HEADERS });
  }

  /**
   * It returns an Observable of type Object
   * 
   * @return Observable<Object>
   */
  public getTasks(): Observable<Object> {
    return this.httpClient.get(this.constant.BASEURL + "tasks");
  }

  /**
   * This function takes in a task object and returns an observable of type any
   * 
   * @param task - This is the task object that we are sending to the server.
   * @return Observable<any>
   */
  public postTasks(task: Task): Observable<any> {
    const body = JSON.stringify(task);
    return this.httpClient.post<any>(this.constant.BASEURL + "task", body, { 'headers': this.constant.HEADERS });
  }

  /**
   * To get a task by id
   * 
   * @param id - The id of the task to be retrieved
   * @return Observable<Object>
   */
  public getTaskById(id: number): Observable<Object> {
    return this.httpClient.get(this.constant.BASEURL + "task/" + id);
  }

}