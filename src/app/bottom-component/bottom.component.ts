import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Task } from './task-list/task';
import { TaskService } from '../services/task.service';
import { Menu } from './category/menu';
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
