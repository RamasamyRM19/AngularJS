import { Component, DoCheck, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-bottom-center-bar',
  templateUrl: './bottom-center-bar.component.html',
  styleUrls: ['./bottom-center-bar.component.scss']
})
export class BottomCenterBarComponent implements OnInit, DoCheck {

  currentDate = new Date();

  @Input() categoryIcon?: String;
  @Input() categoryName = "";
  public taskItem: Task[] = [];
  public tasks: Task[] = [];
  public task?: Task;
  public pendingTasks: Task[] = [];
  public categoryItem?: boolean;

  ngOnInit(): void {
    this.categoryIcon = "fa fa-sun-o";
    this.categoryName = "My Day";
    this.renderTask();
  }

  constructor() {
  }

  ngDoCheck(): void {
    this.renderTask();
  }

  addNewTask(event: any) {
    if (event.key == "Enter") {
      let categories: string[] = [this.categoryName];
      if (this.categoryName !== "Tasks") {
        categories.push("Tasks");
      }
      this.task = {
        id: this.taskItem.length,
        name: event.target.value,
        subName: "Tasks",
        isImportant: false,
        isCompleted: false,
        category: categories
      }
      this.taskItem.unshift(this.task);
      event.target.value = "";
    }
  }

  onImportant(categoryName: string) {
    //this.taskList.emit(categoryName);
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

}
