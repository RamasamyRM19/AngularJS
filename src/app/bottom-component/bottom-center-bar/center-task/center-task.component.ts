import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tasks } from '../task';

@Component({
  selector: 'app-center-task',
  templateUrl: './center-task.component.html',
  styleUrls: ['./center-task.component.scss']
})
export class CenterTaskComponent {
  @Input() taskList?: Tasks[];
  @Input() task?: Tasks[];
  public TASKS: Tasks[] = [];

  clickToImportant(event: any) {
    if (event.target.className == "fa fa-star-o") {
      event.target.className = "fa fa-star";
      this.addToImportant();
    } else if (event.target.className == "fa fa-star") {
      event.target.className = "fa fa-star-o";
    }
  }

  @Output() onImportant = new EventEmitter<any>();

  addToImportant() {
    // console.log(this.task);
    // this.onImportant.emit(this.task);
  }

  completedTask(task: Tasks) {
    console.log(task);
    task = {
      id: task.id,
      name: task.name,
      subName: task.subName,
      circleIcon: task.circleIcon,
      starIcon: task.starIcon
    }
    this.TASKS.unshift(task);
    //task.unshift(task);
    console.log(task);
  }

}
