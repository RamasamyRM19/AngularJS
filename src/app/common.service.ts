import { EventEmitter, Injectable } from '@angular/core';
import { Menu } from './bottom-component/bottom-left-bar/menu';
import { BehaviorSubject, Subject } from 'rxjs';
import { Task } from './bottom-component/bottom-center-bar/task';
import { Constant } from './constant';

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
  private task: Task = {
    id: 0,
    name: '',
    subName: 'Tasks',
    isImportant: false,
    isCompleted: false,
    categoryIds: [],
    note: ''
  };
  private selectedCategory = new BehaviorSubject(this.CategoryMenu[0]);
  public categoryDetails$ = this.selectedCategory.asObservable();
  private selectedTask = new BehaviorSubject(this.task);
  public selectedTask$ = this.selectedTask.asObservable();
  public constant = new Constant();

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

  setSelectedCategory(category: Menu): void {
    this.selectedCategory.next(category);
  }

  getSelectedCategory() {
    return this.selectedCategory;
  }

  setTasks(task: Task) {
    this.selectedTask.next(task);
  }

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

  clickToImportant(task: Task) {
    if (task.isImportant == false) {
      task.isImportant = true;
      task.categoryIds.push(this.constant.IMPORTANT_ID);
    } else {
      task.isImportant = false;
      let index = task.categoryIds.indexOf(this.constant.IMPORTANT_ID);
      task.categoryIds.splice(index, 1);
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
    if (this.leftContainer === 'left-container') {
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
