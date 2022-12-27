import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-default-category',
  templateUrl: './default-category.component.html',
  styleUrls: ['./default-category.component.scss']
})
export class DefaultCategoryComponent {

  @Input() menus?:Menu[];

  @Input() selectedCategory?:string;

  //public selectedCategory?:String;
  public selectedCategoryItem?: Menu;

  constructor() {}

  ngOnInit(): void {
    this.selectedCategory = "My Day";
  }

  @Output() onSelected = new EventEmitter<any>();

  onSelectCategory(category:Menu) {
    this.selectedCategory = category.icon + "/" + category.name;
    this.onSelected.emit(this.selectedCategory);
    this.selectedCategoryItem = category;
  }

}
