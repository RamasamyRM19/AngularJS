import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';
import { TaskService } from 'src/app/services/task.service';
import { Constant } from 'src/app/constant';
import { DataService } from 'src/app/services/data.service';
import { FilterTaskPipe } from 'src/app/pipe/filter-task.pipe';

@Component({
  selector: 'app-center-task',
  templateUrl: './center-task.component.html',
  styleUrls: ['./center-task.component.scss']
})
export class CenterTaskComponent {

  @Input() taskList!: Task[];
  public constant = new Constant();
  public filter:string = "";

  ngOnInit(): void {
    //this.getTasks();
  }

  ngDoCheck(): any {
    this.filter = this.taskService.filter;
  }

  constructor(public taskService: TaskService, private dataService: DataService) { }

  getSelectedTask(task:Task): void {
    this.taskService.setSelectedTasks(task);
    this.taskService.rightContainerView();
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