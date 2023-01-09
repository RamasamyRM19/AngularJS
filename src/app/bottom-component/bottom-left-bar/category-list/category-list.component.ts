import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu';
import { TaskService } from 'src/app/task.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

  public selectedCategoryItem?: Menu;

  public menu: Menu[] = this.taskService.getCategories();
  public category!: Menu;
  categories: any;
  private categoryMenu: Menu[] = [];

  //public category: Menu[] = this.taskService.setCategories(this.categoryMenu);

  public selectedCategoryName?: String;

  constructor(private taskService: TaskService, private dataService: DataService) { }

  ngOnInit(): void {
    //this.menu = this.taskService.getCategories();
    this.taskService.categoryDetails$.subscribe(category => this.selectedCategoryName = category.name);
    this.getCategories();

    // this.dataService.postCategories(this.category)
    //   .subscribe(data => {
    //     console.log(data)
    //   })
  }

  onSelectCategory(category: Menu): void {
    this.selectedCategoryName = category.name;
    this.taskService.setSelectedCategory(category);
  }

  getCategories() {
    this.dataService.getCategories()
      .subscribe((response:any) => {
        this.menu = response;
        this.taskService.categoryMenu = this.menu;
        console.log(response);
        this.taskService.setCategories(this.menu);
      });
  }

}
