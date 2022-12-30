import { Component, DoCheck, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './task';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-bottom-center-bar',
  templateUrl: './bottom-center-bar.component.html',
  styleUrls: ['./bottom-center-bar.component.scss']
})
export class BottomCenterBarComponent implements OnInit, DoCheck {

  currentDate = new Date();

  @Input() categoryIcon?: String;
  @Input() categoryName = "";
  public taskItem: Task[] = this.commonService.getTasks();
  public tasks: Task[] = [];
  public task?: Task;
  public pendingTasks: Task[] = [];
  public categoryItem?: boolean;
  @Output() selectedTask = new EventEmitter<Task>();
  public hideCompletedTask = true;
  public completedTasks: Task[] = [];
  //public categoryNameWithIcon = this.categoryIcon + "/" + this.categoryName; 

  ngOnInit(): void {
    this.categoryIcon = "fa fa-sun-o";
    this.renderTask();
    this.commonService.categoryDetails$.subscribe(nameOfCategory => this.categoryName = nameOfCategory);
  }

  constructor(private commonService: CommonService) {
  }

  ngDoCheck(): void {
    //this.categoryNameWithIcon = this.commonService.getSelectedCategory();
    this.renderTask();
  }

  addNewTask(event: any) {
    if (event.key == "Enter") {
      let categories: string[] = [this.categoryName];
      if (this.categoryName !== "Tasks") {
        categories.push("Tasks");
      }
      this.task = {
        id: this.commonService.getTasks().length,
        name: event.target.value,
        subName: "Tasks",
        isImportant: false,
        isCompleted: false,
        category: categories
      }
      this.commonService.addTask(this.task);
      event.target.value = "";
    }
  }

  renderTask() {
    this.pendingTasks = [];
    this.taskItem.forEach(task => {
      task.category.forEach(category => {
        if (category === this.categoryName) {
          this.pendingTasks.push(task);
        }
      });
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

  public isFullScreen = true;

  @Output() isFullScreenItem = new EventEmitter<boolean>();

  showDefaultScreen() {
    console.log("Entered");
    console.log(this.isFullScreen);
    this.isFullScreen = !this.isFullScreen;
    this.isFullScreenItem.emit(this.isFullScreen);
  }

  getSelectedTask(task:Task) {
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
