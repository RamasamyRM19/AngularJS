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

  constructor(private taskService: TaskService, private dataService: DataService) {
  }

  /**
   * The function calls the addNewCategoryMenu() function in the child component, passing the
   * categoryItem variable as a parameter
   */
  public addNewCategoryMenu(): void {
    this.child.addNewCategoryMenu(this.categoryItem);
    this.categoryItem = "";
  }

  /**
   * The toggleContent() function is called when the user clicks the "Show/Hide" button. The function
   * calls the toggleContent() function in the taskService
   */
  public toggleContent() {
    this.taskService.toggleContent();
  }

}

