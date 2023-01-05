import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../bottom-center-bar/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-bottom-right-bar',
  templateUrl: './bottom-right-bar.component.html',
  styleUrls: ['./bottom-right-bar.component.scss']
})
export class BottomRightBarComponent implements OnInit {
 
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
