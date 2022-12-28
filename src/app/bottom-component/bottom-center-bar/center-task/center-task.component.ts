import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tasks } from '../task';

@Component({
  selector: 'app-center-task',
  templateUrl: './center-task.component.html',
  styleUrls: ['./center-task.component.scss']
})
export class CenterTaskComponent {
  @Input() taskList?: Tasks[];
  @Input() task: Tasks[] = [];
  public TASKS: Tasks[] = [];
  @Input() titleName = "";
  @Input() categoryName?: String;

  ngOnInit(): void {}

  constructor() {}

  clickToImportant(event: any, task: Tasks) {
    if (event.target.className == "fa fa-star-o") {
      event.target.className = "fa fa-star";
      this.addToImportant(task);
    } else if (event.target.className == "fa fa-star") {
      event.target.className = "fa fa-star-o";
      this.removeFromImportant(task);
    }
  }

  @Output() onImportant = new EventEmitter<any>();

  addToImportant(Tasks1: Tasks) {
    console.log(Tasks1);
    Tasks1.isImportant = true;
    console.log(this.categoryName);
    let categories = [this.categoryName];
    if (this.categoryName !== "Important") {
      categories.push("Important");
    }
    console.log(categories);
    console.log(Tasks1);
    // this.onImportant.emit(this.task);
  }

  removeFromImportant(Tasks1: Tasks) {
    console.log(Tasks1);
    Tasks1.isImportant = false;
    console.log(this.categoryName);
    let categories = [this.categoryName];
    if (this.categoryName == "Important") {
      //categories.splice("Important");
    }
    console.log(categories);
    console.log(Tasks1);
  }

  completedTask(task: Tasks) {
    console.log(task);
    task.isCompleted = true;
    this.TASKS.unshift(task);
    console.log(task.name);
    //task.unshift(task);
    console.log(task);
  }

  func1(event: any) {
    event.target.className = "fa fa-check-circle-o";
  }

  func2(event: any) {
    event.target.className = "fa fa-circle-thin";
  }

}
