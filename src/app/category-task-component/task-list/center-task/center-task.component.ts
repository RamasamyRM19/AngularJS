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

/* The CenterTaskComponent class is a component that
displays the tasks in the center container */
export class CenterTaskComponent {

  @Input() taskList!: Task[];
  public constant = new Constant();
  public filter:string = "";

  /** 
   * The constructor function is a default function that runs when the component is loaded.
   * @param {TaskService} taskService - TaskService - This is the service we created earlier.
   * @param {DataService} dataService - DataService - This is the name of the dependency we want to
   * inject.
   */
  constructor(public taskService: TaskService, private dataService: DataService) { }

  /**
   * The ngDoCheck() function is called whenever the component is checked for changes
   */
  ngDoCheck(): any {
    this.filter = this.taskService.filter;
  }

  /**
   * The ngOnInit() function is a lifecycle hook. Angular calls ngOnInit() shortly after creating a
   * component. It's a good place to put initialization logic
   */
  ngOnInit(): void {
  }

  /**
   * The function takes in an id, sets the selected task to the task with the id, and then sets the
   * right container view to the task details view
   * @param {number} id - The id of the task that was clicked on.
   */
  getSelectedTask(id:number): void {
    this.taskService.setSelectedTasks(id);
    this.taskService.rightContainerView();
  }

  /**
   * The function takes a task as an argument, and then calls the clickToImportant function in the
   * taskService, passing the task as an argument
   * @param {Task} task - Task
   */
  clickToImportant(task: Task) {
    this.taskService.clickToImportant(task);
  }

  /**
   * The completedTask function takes a task as an argument and passes it to the completedTask function
   * in the taskService
   * @param {Task} task - Task - This is the task that we are going to complete.
   */
  completedTask(task: Task) {
    this.taskService.completedTask(task);
  }
}
