import { Injectable } from '@angular/core';
import { Menu } from './bottom-component/bottom-left-bar/menu';
import { BehaviorSubject } from 'rxjs';
import { Task } from './bottom-component/bottom-center-bar/task';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private CategoryMenu: Menu[] = [
    { id: 1, name: 'My Day', icon: 'fa fa-sun-o', isLastDefaultCategory: false },
    { id: 2, name: 'Important', icon: 'fa fa-star-o', isLastDefaultCategory: false },
    { id: 3, name: 'Planned', icon: 'fa fa-calendar-o', isLastDefaultCategory: false },
    { id: 4, name: 'Assigned to me', icon: 'fa fa-user-o', isLastDefaultCategory: false },
    { id: 5, name: 'Tasks', icon: 'fa fa-home', isLastDefaultCategory: true }
  ];

  private taskList: Task[] = [];

  private selectedCategory = new BehaviorSubject('My Day');
  categoryDetails$ = this.selectedCategory.asObservable();

  getCategories() {
    return this.CategoryMenu;
  }

  addCategory(category: Menu) {
    this.CategoryMenu.push(category);
  }

  setSelectedCategory(categoryIcon: string, categoryName: string) {
    return this.selectedCategory.next(categoryIcon + "/" + categoryName);
  }

  getSelectedCategory() {
    return this.selectedCategory;
  }

  getTasks() {
    return this.taskList;
  }

  addTask(task: Task) {
    this.taskList.unshift(task);  
  }
}
