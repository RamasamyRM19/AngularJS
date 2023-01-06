import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';
import { TaskService } from 'src/app/task.service';
import { Constant } from 'src/app/constant';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-center-task',
  templateUrl: './center-task.component.html',
  styleUrls: ['./center-task.component.scss']
})
export class CenterTaskComponent {

  @Input() taskList!: Task[];
  public constant = new Constant();

  ngOnInit(): void {
    this.getTasks();
  }

  constructor(public taskService: TaskService, private dataService: DataService) { }

  getSelectedTask(task:Task): void {
    this.taskService.setSelectedTasks(task);
    //this.taskService.rightContainerView();
  }

  getTasks() {
    this.dataService.getTasks()
      .subscribe((response:any) => {
        this.taskList = response;
        this.taskService.taskList = this.taskList;
        console.log(response);
        this.taskService.setTasks(this.taskList);
      });
  }
}
