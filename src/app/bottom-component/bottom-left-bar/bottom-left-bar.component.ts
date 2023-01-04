import { Component, Output, EventEmitter } from '@angular/core';
import { Menu } from './menu';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-bottom-left-bar',
  templateUrl: './bottom-left-bar.component.html',
  styleUrls: ['./bottom-left-bar.component.scss']
})

export class BottomLeftBarComponent {

  public CategoryMenu: Menu[] = this.commonService.getCategories();
  public selectedCategory?: string;
  public category?: Menu;
  public categoryItem: string = "";

  ngOnInit() { }

  constructor(private commonService: CommonService) {
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
    this.commonService.addCategory(category);
    this.selectedCategory = this.categoryItem;
    this.onSelected(category);
    this.categoryItem = "";
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
    this.commonService.setSelectedCategory(category);
  }

  // renderCategoryTasks() {
  //   this.renderCategoryTask.emit();
  // }

  toggleContent() {
    this.commonService.toggleContent();
  }

}

