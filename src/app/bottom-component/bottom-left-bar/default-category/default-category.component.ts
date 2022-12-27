import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-default-category',
  templateUrl: './default-category.component.html',
  styleUrls: ['./default-category.component.scss']
})
export class DefaultCategoryComponent {

  @Input() menus?:Menu[];

  public selectedCategory?:String;

  @Output() onSelected = new EventEmitter<any>();

  onSelectCategory(category:Menu) {
    this.selectedCategory= category.icon + "/" + category.name;
    this.onSelected.emit(this.selectedCategory);
  }

}
