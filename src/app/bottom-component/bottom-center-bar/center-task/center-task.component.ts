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
      task.isImportant = true;
      task.category.push("Important");
    } else {
      task.isImportant = false;
      let index = task.category.indexOf('Important');
      task.category.splice(index, 1);
    }
  }

  completedTask(event: any, task: Task) {
    if (event.target.className == "fa fa-check-circle-o") {
      task.isCompleted = true;
    } else {
      task.isCompleted = false;
    }
  }

  mouseOverFunction(event: any) {
    event.target.className = "fa fa-check-circle-o";
  }

  mouseOutFunction(event: any) {
    event.target.className = "fa fa-circle-thin";
  }

  @Output() selectedTask = new EventEmitter<Task>();

  getSelectedTask(task:Task) {
    this.selectedTask.emit(task);
  }

  addToRightContent(task:Task) {
    console.log(task.name);
    this.selectedTask.emit(task);
  }

}
