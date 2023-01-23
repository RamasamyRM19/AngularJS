import { Component, EventEmitter, Output, Input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Menu } from './category/menu';
import { Constant } from '../constant';

@Component({
  selector: 'app-category-task-component',
  templateUrl: './category-task.component.html',
  styleUrls: ['./category-task.component.scss']
})
export class CategoryTaskComponent {

  public categoryName: string = "";
  public categoryIcon: string = "";
  public categoryList!: Menu[];
  public constant = new Constant();

  /**
   * The ngOnInit() function is a lifecycle hook. Angular calls ngOnInit() shortly after creating a
   * component. It's a good place to put initialization logic
   */
  ngOnInit(): void {
  }

  constructor(public taskService: TaskService) {
  }

  /**
   * It takes a string, splits it into an array, and assigns the first element of the array to the
   * categoryIcon variable and the second element of the array to the categoryName variable
   * 
   * @param {string} categoryName - The name of the category that the user clicked on.
   */
  public getCategory(categoryName: string): void {
    this.categoryIcon = categoryName.split("/")[0];
    this.categoryName = categoryName.split("/")[1];
  }

  /**
   * This function takes an array of Menu objects and assigns it to the categoryList property
   * 
   * @param {Menu[]} categories - Menu[] - This is the array of Menu objects that we are passing to the
   * function.
   */
  public getCategoryList(categories: Menu[]): void {
    this.categoryList = categories;
  }

}
