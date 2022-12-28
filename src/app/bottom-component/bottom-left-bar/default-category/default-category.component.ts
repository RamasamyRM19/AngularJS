import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-default-category',
  templateUrl: './default-category.component.html',
  styleUrls: ['./default-category.component.scss']
})
export class DefaultCategoryComponent {

  @Input() menus?:Menu[];

  @Input() public selectedCategoryName?:string;

  //public selectedCategory?:String;
  public selectedCategoryItem?: Menu;

  constructor() {}

  ngOnInit(): void {
    this.selectedCategoryName = "My Day";
  }

  @Output() onSelected = new EventEmitter<any>();

  onSelectCategory(category:Menu) {
    this.selectedCategoryName = category.icon + "/" + category.name;
    this.onSelected.emit(this.selectedCategoryName);
    this.selectedCategoryItem = category;
  }

}
