import { Component, DoCheck, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './task';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-bottom-center-bar',
  templateUrl: './bottom-center-bar.component.html',
  styleUrls: ['./bottom-center-bar.component.scss']
})
export class BottomCenterBarComponent implements OnInit, DoCheck {

  public currentDate = new Date();
  public taskName: string = "";
  public taskItem: Task[] = this.commonService.getTasks();
  public tasks: Task[] = [];
  public task?: Task;
  public pendingTasks: Task[] = [];
  public categoryItem?: boolean;
  public hideCompletedTask = true;
  public completedTasks: Task[] = [];

  @Input() categoryIcon?: string;
  @Input() categoryName: string = "";

  @Output() selectedTask = new EventEmitter<Task>();

  ngOnInit(): void {
    this.categoryIcon = "fa fa-sun-o";
    this.renderTask();
    this.commonService.categoryDetails$.subscribe(nameOfCategory => this.categoryName = nameOfCategory);
    this.renderCompletedTask();
  }

  constructor(private commonService: CommonService) {
  }

  ngDoCheck(): void {
    this.renderTask();
    this.renderCompletedTask();
  }

  addNewTask() {
    let categories: string[] = [this.categoryName];
    if (this.categoryName !== "Tasks") {
      categories.push("Tasks");
    }
    this.task = {
      id: this.commonService.getTasks().length,
      name: this.taskName,
      subName: "Tasks",
      isImportant: false,
      isCompleted: false,
      category: categories
    }
    this.commonService.addTask(this.task);
    this.taskName = "";
  }

  renderTask() {
    this.pendingTasks = [];
    this.taskItem.forEach(task => {
      if (!task.isCompleted) {
        task.category.forEach(category => {
          if (category === this.categoryName) {
            this.pendingTasks.push(task);
          }
        });
      }
    });
  }

  changeTitleColorBasedOnCategory() {
    if (this.categoryName === 'Assigned to me') {
      return 'changeGreenColor';
    } else if (this.categoryName === 'My Day') {
      return '';
    } else {
      return 'changeBlueColor';
    }
  }

  getSelectedTask(task: Task) {
    this.selectedTask.emit(task);
    console.log(task);
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
    if (!(this.categoryName === "Important" || this.categoryName === "Planned")) {
      this.tasks.forEach(task => {
        if (task.isCompleted) {
          task.category.forEach(category => {
            if (category === this.categoryName) {
              this.completedTasks.push(task);
            }
          });
        }
      });
    }
  }

}
