import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Task } from './bottom-center-bar/task';
import { TaskService } from '../task.service';
import { Menu } from './bottom-left-bar/menu';
import { Constant } from '../constant';

@Component({
  selector: 'app-bottom-component',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent {

  public categoryName: string = "";
  public categoryIcon?: string;
  public categoryList!: Menu[];
  public constant = new Constant();

  ngOnInit(): void {
  }

  constructor(public commonService: TaskService) {
  }

  getCategory(categoryName: string) {
    this.categoryIcon = categoryName.split("/")[0];
    this.categoryName = categoryName.split("/")[1];
  }

  getCategoryList(categories: Menu[]): void {
    this.categoryList = categories;
  }

}
