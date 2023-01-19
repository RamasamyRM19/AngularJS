import { Component, DoCheck, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './task';
import { TaskService } from 'src/app/services/task.service';
import { Menu } from '../category/menu';
import { Constant } from 'src/app/constant';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

/* The TaskListComponent class is used to display the tasks in the task list */
export class TaskListComponent implements OnInit, DoCheck {

  public currentDate = new Date(); 
  public taskName: string = ""; 
  public tasks: Task[] = []; 
  public pendingTasks: Task[] = []; 
  public isImportantTask = false; 
  public hideCompletedTask = true; 
  public completedTasks: Task[] = []; 
  public selectedCategory!: Menu; 
  public constant = new Constant(); 
  public categoryName = ""; 
  public categoryIcon = ""; 
  public categoryList: Menu[] = this.taskService.categoryMenu; 

  constructor(public taskService: TaskService, public dataService: DataService) {
  }

  /**
   * We subscribe to the categoryDetails$ observable, which is a BehaviorSubject that is updated
   * whenever the user clicks on a category in the sidebar. We then use the data from the observable to
   * update the categoryIcon, categoryName, and selectedCategory variables
   */
  ngOnInit(): void {
    this.taskService.categoryDetails$.subscribe(iconOfCategory => this.categoryIcon = iconOfCategory.icon);
    this.taskService.categoryDetails$.subscribe(nameOfCategory => this.categoryName = nameOfCategory.name);
    this.taskService.categoryDetails$.subscribe(category => this.selectedCategory = category);
    this.taskService.retrievedTasks$.subscribe(tasks => this.tasks = tasks);
    this.taskService.retrieveTasks();
  }

  /**
   * The ngDoCheck() function is called every time the component is checked for changes
   */
  ngDoCheck(): void {
    this.renderTask();
    this.renderCompletedTask();
  }

  /**
   * The function adds a new task to the database
   */
  public addNewTask(): void {
    this.categoryList = this.taskService.getCategories();
    if (this.taskName.length > 0) {
      let task: Task;
      let selectedCategoryId = this.selectedCategory.id;
      let categoryId: number[] = [this.selectedCategory.id];
      if (selectedCategoryId !== this.constant.TASK_ID && this.isDefaultTask(selectedCategoryId)) {
        categoryId.push(this.constant.TASK_ID);
      }
      if (selectedCategoryId === this.constant.IMPORTANT_ID) {
        this.isImportantTask = true;
      } else {
        this.isImportantTask = false;
      }
      task = {
        id: 0,
        name: this.taskName,
        subName: 'Tasks',
        isImportant: this.isImportantTask,
        isCompleted: false,
        categoryIds: categoryId,
        note: "",
      }
      this.dataService.postTasks(task)
        .subscribe(() => {
          this.taskService.retrieveTasks();
        });
      this.taskName = "";
    }
    console.log(this.tasks);
  }

  /**
   * It checks if the category is a default category or not
   * @param {number} id - The id of the category
   * @returns A boolean value.
   */
  public isDefaultTask(id: number): boolean {
    let noOfDefaultCategory = 5;
    for (let i = 0; i < noOfDefaultCategory; i++) {
      if (this.categoryList[i].id === id) {
        return true;
      }
    }
    return false;
  }

  /**
   * For each task, if the task is not completed, then for each categoryId in the task, if the
   * categoryId is equal to the selectedCategory.id, then push the task to the pendingTasks array
   */
  renderTask(): void {
    this.pendingTasks = [];
    this.tasks.forEach(task => {
      if (!task.isCompleted) {
        task.categoryIds.forEach(categoryId => {
          if (categoryId === this.selectedCategory.id) {
            this.pendingTasks.push(task);
          }
        });
      }
    });
  }

  /**
   * If the selected category is assigned to me, return the class name changeGreenColor, else if the
   * selected category is my day, return an empty string, else return the class name changeBlueColor
   * @returns A string.
   */
  changeTitleColorBasedOnCategory(): string {
    if (this.selectedCategory.id === this.constant.ASSIGNED_TO_ME_ID) {
      return 'changeGreenColor';
    } else if (this.selectedCategory.id === this.constant.MY_DAY_ID) {
      return '';
    } else {
      return 'changeBlueColor';
    }
  }

  /**
   * If the selected category is My Day, then show the period
   * @returns A boolean value.
   */
  showPeriod(): boolean {
    if (this.selectedCategory.id === this.constant.MY_DAY_ID) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * If the selected category is the constant ASSIGNED_TO_ME_ID, then return true, otherwise return
   * false
   * @returns A boolean value.
   */
  showTaskContent(): boolean {
    if (this.selectedCategory.id === this.constant.ASSIGNED_TO_ME_ID) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * If the hideCompletedTask variable is true, set it to false. If it's false, set it to true
   */
  showAndHideCompletedTask(): void {
    if (this.hideCompletedTask == true) {
      this.hideCompletedTask = false;
    } else {
      this.hideCompletedTask = true;
    }
  }

  /**
   * If the selected category id is equal to the constant assigned to me id, then return true,
   * otherwise return false
   * @returns A boolean value.
   */
  showAssignedToMe(): boolean {
    if (this.selectedCategory.id === this.constant.ASSIGNED_TO_ME_ID) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * It loops through all the tasks and checks if the task is completed and if the task is in the
   * selected category. If it is, it adds it to the completedTasks array
   */
  public renderCompletedTask(): void {
    this.completedTasks = [];
    if (!(this.selectedCategory.id === this.constant.IMPORTANT_ID || this.selectedCategory.id === this.constant.PLANNED_ID)) {
      this.tasks.forEach(task => {
        if (task.isCompleted) {
          task.categoryIds.forEach(categoryId => {
            if (categoryId === this.selectedCategory.id) {
              this.completedTasks.push(task);
            }
          });
        }
      });
    }
  }

  /**
   * The toggleContent() function is called when the user clicks the "Toggle Content" button. The
   * function calls the toggleContent() function in the taskService
   */
  toggleContent(): void {
    this.taskService.toggleContent();
  }

}
