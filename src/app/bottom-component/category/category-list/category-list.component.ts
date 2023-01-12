import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu';
import { TaskService } from 'src/app/services/task.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

  public selectedCategoryItem?: Menu;

  public menu: Menu[] = [];//this.taskService.getCategories();
  //public category!: Menu;
  categories: any;

  public selectedCategoryName?: String;

  constructor(private taskService: TaskService, private dataService: DataService) { }

  ngOnInit(): void {
    this.taskService.categoryDetails$.subscribe(category => this.selectedCategoryName = category.name);
    this.getCategories(true); 
  }

  onSelectCategory(category: Menu): void {
    this.selectedCategoryName = category.name;
    this.taskService.setSelectedCategory(category);
  }

  getCategories(initialSelectedCategory: boolean) {
    this.dataService.getCategories()
      .subscribe((response:any) => {
        this.menu = response;
        this.taskService.categoryMenu = this.menu;
        console.log(response);
        if (!initialSelectedCategory) {
          this.taskService.setSelectedCategory(this.categories[this.categories.length - 1]);
        }
        this.taskService.setCategories(this.menu);
      });
  }

  addNewCategoryMenu(categoryName: string): void {
    categoryName = categoryName.trim();
    if (categoryName == '' || categoryName == ' ') {
      categoryName = 'Untitled list';
    }
    let count = this.countExistingCategory(categoryName);
    if (count > 0) {
      categoryName = categoryName + " (" + count + ")";
    }
    let category = {
      id: 0,
      name: categoryName,
      icon: "fa fa-list-ul",
      isLastDefaultCategory: false
    }
    // this.taskService.addCategory(category);
    // this.selectedCategory = this.categoryName;
    // this.onSelected(category);
    // this.categoryName = "";
    this.dataService.postCategories(category)
      .subscribe(() => {
        console.log(category);
        this.selectedCategoryName = categoryName;
        this.onSelected(category);
        this.getCategories(false);
        //this.refreshPeople();
      });
      categoryName = "";
  }

  countExistingCategory(name: String) {
    var count = 0;
    this.menu.forEach(category => {
      if (category.name.split(" (", 1)[0] === name) {
        count++;
      }
    });
    return count;
  }

  onSelected(category: Menu) {
    this.taskService.setSelectedCategory(category);
  }

}
