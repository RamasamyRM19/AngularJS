import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

  public selectedCategoryItem?: Menu;

  @Input() menu?:Menu[];
  @Input() public selectedCategoryName?:string;

  @Output() onSelected = new EventEmitter<any>();
  
  ngOnInit(): void {
    this.selectedCategoryName = "My Day";
  }

  constructor(private commonService: CommonService) {}

  onSelectCategory(category:Menu) {
    this.selectedCategoryName = category.icon + "/" + category.name;
    this.onSelected.emit(this.selectedCategoryName);
    this.selectedCategoryItem = category;
  }

}
