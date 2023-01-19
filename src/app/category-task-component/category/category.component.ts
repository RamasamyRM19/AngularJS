import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Menu } from './menu';
import { TaskService } from 'src/app/services/task.service';
import { DataService } from 'src/app/services/data.service';
import { CategoryListComponent } from './category-list/category-list.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

/* The CategoryComponent class is the parent component
that contains the CategoryListComponent child component */
export class CategoryComponent {

  public selectedCategory?: string;
  public category?: Menu;
  public categoryItem: string = "";
  @ViewChild(CategoryListComponent) child !: CategoryListComponent;

  /**
   * The ngOnInit() function is a lifecycle hook. Angular calls ngOnInit() shortly after creating a
   * component. It's a good place to put initialization logic
   */
  ngOnInit(): void {
  }

  /**
   * The constructor function is a default function that runs when the component loads. The constructor
   * function is where we inject any services or dependencies that we may need for the component
   * @param {TaskService} taskService - This is the service that we created in the previous step.
   * @param {DataService} dataService - DataService - This is the service that we created in the
   * previous step.
   */
  constructor(private taskService: TaskService, private dataService: DataService) {
  }

  /**
   * The function calls the addNewCategoryMenu() function in the child component, passing the
   * categoryItem variable as a parameter
   */
  addNewCategoryMenu(): void {
    this.child.addNewCategoryMenu(this.categoryItem);
    this.categoryItem = "";
  }

  /**
   * The toggleContent() function is called when the user clicks the "Show/Hide" button. The function
   * calls the toggleContent() function in the taskService
   */
  toggleContent() {
    this.taskService.toggleContent();
  }

}

