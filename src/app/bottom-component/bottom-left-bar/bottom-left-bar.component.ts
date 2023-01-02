import { Component, Output, EventEmitter } from '@angular/core';
import { Menu } from './menu';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-bottom-left-bar',
  templateUrl: './bottom-left-bar.component.html',
  styleUrls: ['./bottom-left-bar.component.scss']
})

export class BottomLeftBarComponent {

  ngOnInit() {}

  constructor( private commonService: CommonService) { 
  }

  public CategoryMenu: Menu[] = this.commonService.getCategories();

  public selectedCategoryName?: string;

  public category?: Menu;
  public categoryItem?: string;
  @Output() renderCategoryTask = new EventEmitter<any>();

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
      this.commonService.addCategory(this.category);
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

 

  renderCategoryTasks() {
    this.renderCategoryTask.emit();
  }

  toggleContent() {
    this.commonService.toggleContent();
  }

}

