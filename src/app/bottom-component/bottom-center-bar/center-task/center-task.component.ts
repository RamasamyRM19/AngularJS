import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-center-task',
  templateUrl: './center-task.component.html',
  styleUrls: ['./center-task.component.scss']
})
export class CenterTaskComponent {
  @Input() taskList: Task[] =[];
  @Input() task: Task[] = [];
  public taskItem: Task[] = [];
  @Input() titleName = "";
  @Input() categoryName?: String;

  ngOnInit(): void {
    this.renderTask();
  }

  public renderTask() {
    this.taskItem = [];
    this.task.forEach(task => {
      if (task.name === this.titleName) {
        this.taskItem.push(task);
      }
    });
  }

  constructor() { }

  clickToImportant(event: any, task: Task) {
    if (event.target.className == "fa fa-star-o") {
      event.target.className = "fa fa-star";
      this.addToImportant(task);
    } else if (event.target.className == "fa fa-star") {
      event.target.className = "fa fa-star-o";
      this.removeFromImportant(task);
    }
  }

  @Output() onImportant = new EventEmitter<any>();

  addToImportant(task: Task) {
    task.isImportant = true;
    let categories = [this.categoryName];
    if (this.categoryName !== "Important") {
      categories.push("Important");
    }
    // this.onImportant.emit(this.task);
  }

  removeFromImportant(task: Task) {
    task.isImportant = false;
    let categories = [this.categoryName];
    if (this.categoryName == "Important") {
      //categories.splice("Important");
    }
  }

  completedTask(task: Task) {
    console.log(task);
    task.isCompleted = true;
    this.taskItem.unshift(task);
    console.log(this.taskItem);
    //task.unshift(task);
  }

  mouseOverFunction(event: any) {
    event.target.className = "fa fa-check-circle-o";
  }

  mouseOutFunction(event: any) {
    event.target.className = "fa fa-circle-thin";
  }

}
