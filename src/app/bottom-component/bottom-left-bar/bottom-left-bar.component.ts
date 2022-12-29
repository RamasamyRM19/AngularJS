import { Component, Output, EventEmitter } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-bottom-left-bar',
  templateUrl: './bottom-left-bar.component.html',
  styleUrls: ['./bottom-left-bar.component.scss']
})

export class BottomLeftBarComponent {

  public CategoryMenu: Menu[] = [
    { id: 1, name: 'My Day', icon: 'fa fa-sun-o', isLastDefaultCategory: false },
    { id: 2, name: 'Important', icon: 'fa fa-star-o', isLastDefaultCategory: false },
    { id: 3, name: 'Planned', icon: 'fa fa-calendar-o', isLastDefaultCategory: false },
    { id: 4, name: 'Assigned to me', icon: 'fa fa-user-o', isLastDefaultCategory: false },
    { id: 5, name: 'Tasks', icon: 'fa fa-home', isLastDefaultCategory: true }
  ];

  constructor() { }

  public selectedCategoryName?: string;

  public category?: Menu;
  public categoryItem?: string;

  addNewCategoryMenu(event: any) {
    if (event.key == "Enter") {
      let count = this.countExistingCategory(event.target.value);
      if (count > 0) {
        event.target.value += " (" + count + ")";
      }
      this.category = {
        id: this.CategoryMenu.length,
        name: event.target.value,
        icon: "fa fa-list-ul",
        isLastDefaultCategory: false
      }
      this.CategoryMenu.push(this.category);
      this.selectedCategoryName = event.target.value;
      this.categoryItem = this.category.icon + "/" + this.category.name;
      this.onSelected(this.categoryItem);
      event.target.value = "";
    }
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

  @Output() selectedCategory = new EventEmitter<string>();

  onSelected(categoryName: string) {
    this.selectedCategory.emit(categoryName);
  }

  public isVisited = false;

  @Output() isVisitedItem = new EventEmitter<boolean>();

  hideBar() {
    console.log("Entered");
    console.log(this.isVisited);
    this.isVisited = !this.isVisited;
    this.isVisitedItem.emit(this.isVisited);
  }

  @Output() renderCategoryTask = new EventEmitter<any>();

  renderCategoryTasks() {
    this.renderCategoryTask.emit();
  }

}

