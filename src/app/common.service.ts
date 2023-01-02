import { EventEmitter, Injectable } from '@angular/core';
import { Menu } from './bottom-component/bottom-left-bar/menu';
import { BehaviorSubject, Subject } from 'rxjs';
import { Task } from './bottom-component/bottom-center-bar/task';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

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

  public leftContainer = 'left-container';
  public centerContainer = 'center-container';
  public rightContainer = 'right-container';

  constructor() { }

  getCategories(): Menu[] {
    return this.CategoryMenu;
  }

  addCategory(category: Menu): void {
    this.CategoryMenu.push(category);
  }

  // setSelectedCategory(categoryIcon: string, categoryName: string) {
  //   return this.selectedCategory.next(categoryIcon + "/" + categoryName);
  // }

  // getSelectedCategory() {
  //   return this.selectedCategory;
  // }

  getTasks(): Task[] {
    return this.taskList;
  }

  addTask(task: Task): void {
    this.taskList.unshift(task);
  }

  mouseOverFunction(event: any) {
    if (event.target.className === "fa-regular fa-circle") {
      event.target.className = "fa-regular fa-circle-check";
    }
  }

  mouseOutFunction(event: any) {
    if (event.target.className === "fa-regular fa-circle-check") {
      event.target.className = "fa-regular fa-circle";
    }
  }

  clickToImportant(event: any, task: Task) {
    if (event.target.className === "fa fa-star-o") {
      task.isImportant = true;
      task.category.push("Important");
    } else {
      task.isImportant = false;
      let index = task.category.indexOf('Important');
      task.category.splice(index, 1);
    }
  }

  completedTask(task: Task) {
    if (task.isCompleted == true) {
      task.isCompleted = false;
    } else {
      task.isCompleted = true;
    }
  }

  toggleContent() {
    if(this.leftContainer === 'left-container') {
      this.leftContainer = 'hide-left-container';
      this.centerContainer = 'full-screen-view';
    } else if (this.centerContainer === 'full-screen-view') {
      this.leftContainer = 'left-container';
      this.centerContainer = 'center-container';
    } 
  }

  toggleRightContent() {
    if (this.centerContainer === 'center-container') {
      this.rightContainer = 'show-block';
      this.centerContainer = 'center-container';
    }
  }

}
