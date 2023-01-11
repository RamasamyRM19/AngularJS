import { Component, DoCheck, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './task';
import { TaskService } from 'src/app/services/task.service';
import { Menu } from '../category/menu';
import { Constant } from 'src/app/constant';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, DoCheck {

  public currentDate = new Date();
  public taskName: string = "";
  public taskItem: Task[] = this.taskService.getTasks();
  //public tasks: Task[] = [];
  public task?: Task;
  public tasks: Task[] = this.taskService.getTasks();
  public pendingTasks: Task[] = [];
  public categoryItem?: boolean;
  public isImportantTask = false;
  public hideCompletedTask = true;
  public completedTasks: Task[] = [];
  public selectedCategory!: Menu;
  public constant = new Constant();
  public categoryName = "";
  public categoryIcon = "";
  public categoryList: Menu[] = this.taskService.categoryMenu;

  constructor(public taskService: TaskService, public dataService: DataService) {
  }

  ngOnInit(): void {
    this.taskService.categoryDetails$.subscribe(iconOfCategory => this.categoryIcon = iconOfCategory.icon);
    this.taskService.categoryDetails$.subscribe(nameOfCategory => this.categoryName = nameOfCategory.name);
    this.taskService.categoryDetails$.subscribe(category => this.selectedCategory = category);
    this.taskService.retrievedTasks$.subscribe(tasks => this.tasks = tasks);
    this.renderTask();
    this.renderCompletedTask();
  }

  ngDoCheck(): void {
    this.renderTask();
    this.renderCompletedTask();
  }

  addNewTask() {
    this.categoryList = this.taskService.getCategories();
    if (this.taskName.length > 0) {
      let task: Task;
      let selectedCategoryId = this.selectedCategory.id;
      let categoryId: number[] = [this.selectedCategory.id];
      if (selectedCategoryId !== this.constant.TASK_ID) {
        categoryId.push(this.constant.TASK_ID);
      }
      if (selectedCategoryId === this.constant.IMPORTANT_ID) {
        this.isImportantTask = true;
      } else {
        this.isImportantTask = false;
      }
      task = {
        id: 0,
        name: this.taskName,
        subName: 'Tasks',
        isImportant: this.isImportantTask,
        isCompleted: false,
        categoryIds: categoryId,
        note: "",
      }
      console.log(task);
      this.taskService.addTask(task);
      this.taskName = "";
      this.dataService.postTasks(task)
      .subscribe(() => {
        this.taskService.getTasks();
      });
    }
    console.log(this.tasks);
  }

  renderTask() {
    this.pendingTasks = [];
    this.tasks.forEach(task => {
      if (!task.isCompleted) {
        task.categoryIds.forEach(categoryId => {
          if (categoryId === this.selectedCategory.id) {
            this.pendingTasks.push(task);
          }
        });
      }
    });
  }

  changeTitleColorBasedOnCategory() {
    if (this.selectedCategory.id === this.constant.ASSIGNED_TO_ME_ID) {
      return 'changeGreenColor';
    } else if (this.selectedCategory.id === this.constant.MY_DAY_ID) {
      return '';
    } else {
      return 'changeBlueColor';
    }
  }

  showPeriod() {
    if (this.selectedCategory.id === this.constant.MY_DAY_ID) {
      return true;
    } else {
      return false;
    } 
  }

  showTaskContent() {
    if (this.selectedCategory.id === this.constant.ASSIGNED_TO_ME_ID) {
      return true;
    } else {
      return false;
    } 
  }

  showAndHideCompletedTask() {
    if (this.hideCompletedTask == true) {
      this.hideCompletedTask = false;
    } else {
      this.hideCompletedTask = true;
    }
  }

  showAssignedToMe() {
    if (this.selectedCategory.id === this.constant.ASSIGNED_TO_ME_ID) {
      return true;
    } else {
      return false;
    } 
  }

  public renderCompletedTask() {
    this.completedTasks = [];
    if (!(this.selectedCategory.id === this.constant.IMPORTANT_ID || this.selectedCategory.id === this.constant.PLANNED_ID)) {
      this.tasks.forEach(task => {
        if (task.isCompleted) {
          task.categoryIds.forEach(categoryId => {
            if (categoryId === this.selectedCategory.id) {
              this.completedTasks.push(task);
            }
          });
        }
      });
    }
  }

  toggleContent(): void {
    this.taskService.toggleContent();
  }

}