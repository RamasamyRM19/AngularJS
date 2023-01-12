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

export class CategoryComponent {

  //public CategoryMenu: Menu[] = [];
  public selectedCategory?: string;
  public category?: Menu;
  public categoryItem: string = "";
  //public menu: Menu[] = this.taskService.getCategories();
  //categories: any;

  @ViewChild(CategoryListComponent) child !: CategoryListComponent;
  //public addedCategory!: Menu;

  ngOnInit(): void {
  }

  constructor(private taskService: TaskService, private dataService: DataService) {
  }

  addNewCategoryMenu(): void {
    this.child.addNewCategoryMenu(this.categoryItem);
      this.categoryItem = "";
  }

  toggleContent() {
    this.taskService.toggleContent();
  }

}

