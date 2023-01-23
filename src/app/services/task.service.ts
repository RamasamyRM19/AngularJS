import { Injectable } from '@angular/core';
import { Menu } from '../category-task-component/category/menu';
import { BehaviorSubject, Subject } from 'rxjs';
import { Task } from '../category-task-component/task-list/task';
import { Constant } from '../constant';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

/* To manage the tasks that are displayed on the screen */
export class TaskService {

  public categoryMenu: Menu[] = [];
  private task: Task = {
    id: 0,
    name: '',
    subName: 'Tasks',
    isImportant: false,
    isCompleted: false,
    categoryIds: [],
    note: ''
  };
  private initialCategory = { id: 1, name: 'My Day', icon: 'fa fa-sun-o', isLastDefaultCategory: false };
  private selectedCategory = new BehaviorSubject(this.initialCategory);
  public categoryDetails$ = this.selectedCategory.asObservable();
  private selectedTask = new BehaviorSubject(this.task);
  public selectedTask$ = this.selectedTask.asObservable();
  public constant = new Constant();
  public viewLeftContainer = true;
  public viewRightContainer = true;
  public applyClass = this.constant.NORMAL_SCREEN;
  private retrievedTasks = new Subject<Task[]>();
  public retrievedTasks$ = this.retrievedTasks.asObservable();
  public filter: string = "";
  public filterSubject = new BehaviorSubject(this.filter);
  public filter$ = this.filterSubject.asObservable();
  public currentSelectedTaskId = 0;

  constructor(private dataService: DataService) {
    this.viewRightContainer = false;
    this.setSelectedTasks(1);
  }

  /**
   * Get all the categories in an array of Menu objects
   * 
   * @return categoryMenu
   */
  public getCategories(): Menu[] {
    return this.categoryMenu;
  }

  /**
   * Sets an array of Category Menu objects and assigns it to the categoryMenu property.
   * 
   * @param categories - this is the array of Menu objects that we are passing in.
   */
  public setCategories(categories: Menu[]): void {
    this.categoryMenu = categories;
  }

  /**
   * Sets the category based on selecting the category menu.
   * Takes Menu object as an argument, and sets the selectedCategory property to that Menu object.
   * 
   * @param category - the category that was selected.
   */
  public setSelectedCategory(category: Menu): void {
    this.selectedCategory.next(category);
  }

  /**
   * Gets the selected category
   * 
   * @return BehaviorSubject<Menu>
   */
  public getSelectedCategory(): BehaviorSubject<Menu> {
    return this.selectedCategory;
  }

  /**
   * The function takes in a taskId, and if it's undefined, it sets the taskId to the
   * currentTaskSelectedId. Then, it calls the getTaskById function from the dataService, and
   * subscribes to the observable that is returned. The observable returns a task, and the function
   * sets the selectedTask to the task that was returned.
   * 
   * @param taskId - the id of the task to be selected. If not provided, the current task
   * selected will be used.
   */
  public setSelectedTasks(taskId?: number): void { 
    if (taskId === undefined) {
      taskId = this.currentSelectedTaskId;
    }
    this.dataService.getTaskById(taskId).subscribe((task: any) => {
      this.selectedTask.next(task);
      this.currentSelectedTaskId = task.id;
    })
  }

  /**
   * Retrieve all the tasks based on subscribing to the observable returned by the getTasks() 
   * function in the data service, and emit the retrieved tasks to the retrievedTasks observable
   */
  public retrieveTasks(): void {
    this.dataService.getTasks().subscribe((tasks: any) => {
      this.retrievedTasks.next(tasks.reverse());
    })
  }

  /**
   * If the target of the mouseover event is a circle, then change the target's class to a check circle
   * for a task completion
   * 
   * @param event - event that is triggered when the mouse is over the element.
   */
  public mouseOverFunction(event: any): void {
    if (event.target.className === "fa-regular fa-circle") {
      event.target.className = "fa-regular fa-circle-check";
    }
  }

  /**
   * If the target of the mouseout event is a checkmark, then change the target's class to a circle
   * for a task completion
   * 
   * @param event - event that is triggered when the mouse is out the element.
   */
  public mouseOutFunction(event: any): void {
    if (event.target.className === "fa-regular fa-circle-check") {
      event.target.className = "fa-regular fa-circle";
    }
  }

  /**
   * The function takes a task as a parameter, and if the task is not important, it sets the task to
   * important and adds the important category id to the task's categoryIds array. If the task is
   * already important, it sets the task to not important and removes the important category id from
   * the task's categoryIds array
   * 
   * @param task - task object that is passed in from the template.
   */
  public clickToImportant(task: Task): void {
    if (task.isImportant == false) {
      task.isImportant = true;
      task.categoryIds.push(this.constant.IMPORTANT_ID);
    } else {
      task.isImportant = false;
      let index = task.categoryIds.indexOf(this.constant.IMPORTANT_ID);
      task.categoryIds.splice(index, 1);
    }
    this.dataService.postTasks(task).subscribe(() => {
      this.retrieveTasks();
    })
  }

  /**
   * The function takes a task as an argument, and if the task is completed, it sets the task to
   * incomplete, and if the task is incomplete, it sets the task to complete
   * 
   * @param task - task object that is passed in from the template.
   */
  public completedTask(task: Task): void {
    if (task.isCompleted == true) {
      task.isCompleted = false;
    } else {
      task.isCompleted = true;
    }
    this.dataService.postTasks(task).subscribe(() => {
      this.retrieveTasks();
    })
  }

  /**
   * If the left container is visible, hide it and apply the appropriate class to the main container.
   * If the left container is hidden, show it and apply the appropriate class to the main container.
   */
  public toggleContent(): void {
    if (this.viewLeftContainer === true) {
      this.viewLeftContainer = false;
      if (this.viewRightContainer === false) {
        this.applyClass = this.constant.FULL_SCREEN;
      } else {
        this.applyClass = this.constant.LEFT_SCREEN;
      }
    } else {
      this.viewLeftContainer = true;
      if (this.viewRightContainer === false) {
        this.applyClass = this.constant.NORMAL_SCREEN;
      } else {
        this.applyClass = this.constant.CENTER_SCREEN;
      }
    }
  }

  /**
   * To show the right container of the screen
   */
  public rightContainerView(): void {
    this.viewRightContainer = true;
    if (this.viewLeftContainer === true) {
      this.applyClass = this.constant.CENTER_SCREEN;
    } else {
      this.applyClass = this.constant.LEFT_SCREEN;
    }
  }

  /**
   * Hides the right container and applies the appropriate class to the left container
   */
  public hideRightContainer(): void {
    this.viewRightContainer = false;
    if (this.viewLeftContainer === true) {
      this.applyClass = this.constant.NORMAL_SCREEN;
    } else {
      this.applyClass = this.constant.FULL_SCREEN;
    }
  }

}
