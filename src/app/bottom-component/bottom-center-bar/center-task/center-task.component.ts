import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';
import { TaskService } from 'src/app/task.service';
import { Constant } from 'src/app/constant';

@Component({
  selector: 'app-center-task',
  templateUrl: './center-task.component.html',
  styleUrls: ['./center-task.component.scss']
})
export class CenterTaskComponent {

  @Input() taskList!: Task[];
  public constant = new Constant();

  ngOnInit(): void {
  }

  constructor(public taskService: TaskService) { }

  getSelectedTask(task:Task): void {
    this.taskService.setTasks(task);
    //this.taskService.rightContainerView();
  }
}
