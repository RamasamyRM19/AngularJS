import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task-list/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
/* The TaskDetailsComponent class is a component that displays the details of a selected task */
export class TaskDetailsComponent implements OnInit {

  public selectedTask!: Task;
  public note = "";

  /**
   * The ngOnInit() function is a lifecycle hook that is called after the constructor and after the
   * first ngOnChanges()
   */
  ngOnInit(): void {
    this.taskService.selectedTask$.subscribe(task => this.selectedTask = task);
    console.log(this.selectedTask);
  }

  /**
   * The constructor function is a default function that runs when we create a new instance of a class
   * @param {TaskService} taskService - This is the name of the parameter.
   */
  constructor(public taskService: TaskService) { }

  /**
   * It calls the hideRightContainer() function in the taskService.ts file
   */
  hideRightContainer(): void {
    this.taskService.hideRightContainer();
  }

  /**
   * The function addNotes() is a void function that takes no parameters. It sets the selectedTask's
   * note property to the note property of the component
   */
  addNotes(): void {
    this.selectedTask.note = this.note;
  }

}
