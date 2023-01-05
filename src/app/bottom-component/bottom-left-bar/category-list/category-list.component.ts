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

  private categoryMenu: Menu[] = [
    { id: 1, name: 'My Day', icon: 'fa fa-sun-o', isLastDefaultCategory: false },
    { id: 2, name: 'Important', icon: 'fa fa-star-o', isLastDefaultCategory: false },
    { id: 3, name: 'Planned', icon: 'fa fa-calendar-o', isLastDefaultCategory: false },
    { id: 4, name: 'Assigned to me', icon: 'fa fa-user-o', isLastDefaultCategory: false },
    { id: 5, name: 'Tasks', icon: 'fa fa-home', isLastDefaultCategory: true }
  ];

  //public category: Menu[] = this.taskService.setCategories(this.categoryMenu);

  @Input() public selectedCategoryName?: String;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.menu = this.taskService.getCategories();
    this.taskService.categoryDetails$.subscribe(category => this.selectedCategoryName = category.name);

    // this.dataService.postCategories(this.category)
    //   .subscribe(data => {
    //     console.log(data)
    //   })
  }

  onSelectCategory(category: Menu): void {
    this.selectedCategoryName = category.name;
    this.taskService.setSelectedCategory(category);
  }

}
