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

  public CategoryMenu: Menu[] = this.taskService.getCategories();
  public selectedCategory?: string;
  public category?: Menu;
  public categoryItem: string = "";
  // @ViewChild(CategoryListComponent) child !: CategoryListComponent;
  // public addedCategory!: Menu;

  ngOnInit(): void {
  }

  constructor(private taskService: TaskService, private dataService: DataService) {
  }

  addNewCategoryMenu(): void {
    this.categoryItem = this.categoryItem.trim();
    if (this.categoryItem == '' || this.categoryItem == ' ') {
      this.categoryItem = 'Untitled list';
    }
    let count = this.countExistingCategory(this.categoryItem);
    if (count > 0) {
      this.categoryItem = this.categoryItem + " (" + count + ")";
    }
    let category = {
      id: 0,
      name: this.categoryItem,
      icon: "fa fa-list-ul",
      isLastDefaultCategory: false
    }
    this.taskService.addCategory(category);
    this.selectedCategory = this.categoryItem;
    this.onSelected(category);
    this.categoryItem = "";
    // this.dataService.postCategories(category).subscribe((response: any) => {
    //   console.log(response);
    // });
    this.dataService.postCategories(category)
      .subscribe(data => {
        console.log(category)
        this.dataService.getCategories();
        //this.refreshPeople();
      });
  }

  countExistingCategory(name: String) {
    var count = 0;
    this.CategoryMenu.forEach(category => {
      if (category.name.split(" (", 1)[0] === name) {
        count++;
      }
    });
    return count;
  }

  onSelected(category: Menu) {
    this.taskService.setSelectedCategory(category);
  }

  // renderCategoryTasks() {
  //   this.renderCategoryTask.emit();
  // }

  toggleContent() {
    this.taskService.toggleContent();
  }

}

