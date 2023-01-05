import { Component, Output, EventEmitter } from '@angular/core';
import { Menu } from './menu';
import { TaskService } from 'src/app/task.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-bottom-left-bar',
  templateUrl: './bottom-left-bar.component.html',
  styleUrls: ['./bottom-left-bar.component.scss']
})

export class BottomLeftBarComponent {

  public CategoryMenu: Menu[] = this.taskService.getCategories();
  public selectedCategory?: string;
  public category?: Menu;
  public categoryItem: string = "";
  categories: any;
  //user!: Menu;

  ngOnInit() {
    this.getCategories();
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
      id: this.CategoryMenu.length + 1,
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
        console.log(data)
        this.dataService.getCategories();
        //this.refreshPeople();
      })
    this.getCategories();
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

  getCategories() {
    this.dataService.getCategories()
      .subscribe(response => {
        this.categories = response;
        console.log(response);
      });
  }

}

