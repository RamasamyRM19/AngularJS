import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task-list/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
 
 public selectedTask!: Task;

 public note = "";
  
  ngOnInit(): void {
    this.taskService.selectedTask$.subscribe(task => this.selectedTask = task);
  }

  constructor(public taskService:TaskService) {}

  hideRightContainer(): void {
    this.taskService.hideRightContainer();
  }

  addNotes(): void {
    this.selectedTask.note = this.note;
  }

}
