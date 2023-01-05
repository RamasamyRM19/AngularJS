import { Component, DoCheck, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './task';
import { TaskService } from 'src/app/task.service';
import { Menu } from '../bottom-left-bar/menu';
import { Constant } from 'src/app/constant';

@Component({
  selector: 'app-bottom-center-bar',
  templateUrl: './bottom-center-bar.component.html',
  styleUrls: ['./bottom-center-bar.component.scss']
})
export class BottomCenterBarComponent implements OnInit, DoCheck {

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

  constructor(public taskService: TaskService) {
  }

  ngOnInit(): void {
    this.categoryIcon = "fa fa-sun-o";
    this.renderTask();
    this.taskService.categoryDetails$.subscribe(iconOfCategory => this.categoryIcon = iconOfCategory.icon);
    this.taskService.categoryDetails$.subscribe(nameOfCategory => this.categoryName = nameOfCategory.name);
    this.taskService.categoryDetails$.subscribe(category => this.selectedCategory = category);
    this.renderCompletedTask();
  }

  ngDoCheck(): void {
    this.renderTask();
    this.renderCompletedTask();
  }

  addNewTask() {
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
        id: this.taskService.getTasks().length,
        name: this.taskName,
        subName: 'Tasks',
        isImportant: this.isImportantTask,
        isCompleted: false,
        categoryIds: categoryId,
        note: "",
      }
      console.log(task.id);
      this.taskService.addTask(task);
      this.taskName = "";
    }
    console.log(this.tasks);
  }

  renderTask() {
    this.pendingTasks = [];
    this.taskItem.forEach(task => {
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

  showAndHideCompletedTask() {
    if (this.hideCompletedTask == true) {
      this.hideCompletedTask = false;
    } else {
      this.hideCompletedTask = true;
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
