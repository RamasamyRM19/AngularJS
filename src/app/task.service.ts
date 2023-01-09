import { EventEmitter, Injectable } from '@angular/core';
import { Menu } from './bottom-component/bottom-left-bar/menu';
import { BehaviorSubject, Subject } from 'rxjs';
import { Task } from './bottom-component/bottom-center-bar/task';
import { Constant } from './constant';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  // private categoryMenu: Menu[] = [
  //   { id: 1, name: 'My Day', icon: 'fa fa-sun-o', isLastDefaultCategory: false },
  //   { id: 2, name: 'Important', icon: 'fa fa-star-o', isLastDefaultCategory: false },
  //   { id: 3, name: 'Planned', icon: 'fa fa-calendar-o', isLastDefaultCategory: false },
  //   { id: 4, name: 'Assigned to me', icon: 'fa fa-user-o', isLastDefaultCategory: false },
  //   { id: 5, name: 'Tasks', icon: 'fa fa-home', isLastDefaultCategory: true }
  // ];

  public categoryMenu: Menu[] = []; /*---------*/
  public taskList: Task[] = []; /*---------*/
  private task: Task = {
    id: 0,
    name: '',
    subName: 'Tasks',
    isImportant: false,
    isCompleted: false,
    categoryIds: [],
    note: ''
  }; /*---------*/
  private initialCategory = { id: 0, name: 'My Day', icon: 'fa fa-sun-o', isLastDefaultCategory: false };
  private selectedCategory = new BehaviorSubject(this.initialCategory);
  public categoryDetails$ = this.selectedCategory.asObservable();
  //private initialTask = { id: 0, name: '', subName: 'Tasks', isImportant: false, isCompleted: false, categoryIds: [1], note: '' };
  private selectedTask = new BehaviorSubject(this.task);
  public selectedTask$ = this.selectedTask.asObservable();
  public constant = new Constant(); /*---------*/

  public leftContainer = 'left-container';
  public centerContainer = 'center-container';
  public rightContainer = 'right-container';
  public viewLeftContainer = true;
  public viewRightContainer = true;
  public applyClass = this.constant.NORMAL_SCREEN;

  private retrievedTasks = new Subject<Task[]>();
  public retrievedTasks$ = this.retrievedTasks.asObservable();

  private getTask = new Subject<Task[]>();
  public getTask$ = this.getTask.asObservable();

  constructor(private dataService: DataService) { 
    this.retrieveTasks();
   this.viewRightContainer = false;
  }

  getCategories(): Menu[] {
    return this.categoryMenu;
  }

  setCategories(categories:Menu[]) {
    this.categoryMenu = categories;
  }

  addCategory(category: Menu): void {
    this.categoryMenu.push(category);
  }

  setSelectedCategory(category: Menu): void {
    this.selectedCategory.next(category);
  }

  getSelectedCategory(): BehaviorSubject<Menu> {
    return this.selectedCategory;
  }

  setSelectedTasks(task: Task): void {
    this.selectedTask.next(task);
  }

  getSelectedTasks() {
    return this.selectedTask;
  }

  setTasks(task:Task[]) {
    this.taskList = task;
  }

  retrieveTasks() {
    this.dataService.getTasks().subscribe((tasks: any) => {
      this.taskList = tasks;
      this.retrievedTasks.next(tasks);
    })
  }

  getTasks(): Task[] {
    return this.taskList;
  }

  addTask(task: Task): void {
    this.taskList.unshift(task);
  }

  mouseOverFunction(event: any): void {
    if (event.target.className === "fa-regular fa-circle") {
      event.target.className = "fa-regular fa-circle-check";
    }
  }

  mouseOutFunction(event: any): void {
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
      this.dataService.postTasks(task);
    }
    this.dataService.postTasks(task).subscribe(() => {
      this.retrieveTasks();
    })
  }

  completedTask(task: Task) {
    if (task.isCompleted == true) {
      task.isCompleted = false;
    } else {
      task.isCompleted = true;
    }
    this.dataService.postTasks(task).subscribe(() => {
      this.retrieveTasks();
    })
  }

  toggleContent(): void {
    if (this.viewLeftContainer === true) {
      this.viewLeftContainer = false;
      if (this.viewRightContainer === false) {
        this.applyClass = this.constant.FULL_SCREEN;
      } else {
        this.applyClass = this.constant.LEFT_SCREEN;
      }
    } else {
      this.viewLeftContainer = true;
      if (this.viewRightContainer === false) {
        this.applyClass = this.constant.NORMAL_SCREEN;
      } else {
        this.applyClass = this.constant.CENTER_SCREEN;
      }
    }
  }

  rightContainerView(): void {
    this.viewRightContainer = true;
    if (this.viewLeftContainer === true) {
      this.applyClass = this.constant.CENTER_SCREEN;
    } else {
      this.applyClass = this.constant.LEFT_SCREEN;
    }
  }

  hideRightContainer(): void {
    this.viewRightContainer = false;
    if (this.viewLeftContainer === true) {
      this.applyClass = this.constant.NORMAL_SCREEN;
    } else {
      this.applyClass = this.constant.FULL_SCREEN;
    }
  }

}
