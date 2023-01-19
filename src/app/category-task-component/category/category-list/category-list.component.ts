import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu';
import { TaskService } from 'src/app/services/task.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})

/* The CategoryListComponent class is used to display the list of categories in the sidebar */
export class CategoryListComponent {

  public selectedCategoryItem?: Menu;
  public menu: Menu[] = [];
  categories: any;
  public selectedCategoryName?: String;

  /**
   * The constructor function is a default function that runs when the component loads. 
   * @param {TaskService} taskService - This is the service that we created earlier.
   * @param {DataService} dataService - DataService - This is the name of the dependency we want to
   * inject.
   */
  constructor(private taskService: TaskService, private dataService: DataService) { }

  /**
   * We subscribe to the categoryDetails$ observable in the taskService and set the
   * selectedCategoryName to the name of the category that is passed in. 
   * 
   * We then call the getCategories() function and pass in true.
   */
  ngOnInit(): void {
    this.taskService.categoryDetails$.subscribe(category => this.selectedCategoryName = category.name);
    this.getCategories(true);
  }

  /**
   * When a user clicks on a category, the category name is set to the selectedCategoryName variable
   * and the category is set to the selectedCategory variable in the taskService
   * @param {Menu} category - Menu - this is the category that was selected from the menu.
   */
  onSelectCategory(category: Menu): void {
    this.selectedCategoryName = category.name;
    this.taskService.setSelectedCategory(category);
  }

  /**
   * The function gets the categories from the database and sets the selected category to the last
   * category in the list
   * @param {boolean} initialSelectedCategory - boolean - this is a boolean value that is used to
   * determine whether or not to set the selected category to the last category in the list. This is
   * used when the user is creating a new task.
   */
  getCategories(initialSelectedCategory: boolean) {
    this.dataService.getCategories()
      .subscribe((response: any) => {
        this.menu = response;
        this.taskService.categoryMenu = this.menu;
        console.log(response);
        if (!initialSelectedCategory) {
          this.taskService.setSelectedCategory(this.categories[this.categories.length - 1]);
        }
        this.taskService.setCategories(this.menu);
      });
  }

  /**
   * It takes a string as an argument, trims it, checks if it's empty, and if it's not, it checks if
   * there's already a category with the same name, and if there is, it appends a number to the end of
   * the name. Then it creates a new category object, sets the name to the trimmed string, and sends it
   * to the server
   * @param {string} categoryName - string - the name of the category to be added
   */
  addNewCategoryMenu(categoryName: string): void {
    categoryName = categoryName.trim();
    if (categoryName == '' || categoryName == ' ') {
      categoryName = 'Untitled list';
    }
    let count = this.countExistingCategory(categoryName);
    if (count > 0) {
      categoryName = categoryName + " (" + count + ")";
    }
    let category = {
      id: 0,
      name: categoryName,
      icon: "fa fa-list-ul",
      isLastDefaultCategory: false
    }
    this.dataService.postCategories(category)
      .subscribe(() => {
        console.log(category);
        this.selectedCategoryName = categoryName;
        this.onSelected(category);
        this.getCategories(false);
      });
    categoryName = "";
  }

  /**
   * It takes a string as an argument, loops through the menu array, and returns the number of times
   * the string appears in the menu array
   * @param {String} name - The name of the category to be created.
   * @returns The number of times a category name appears in the menu.
   */
  countExistingCategory(name: String) {
    var count = 0;
    this.menu.forEach(category => {
      if (category.name.split(" (", 1)[0] === name) {
        count++;
      }
    });
    return count;
  }

  /**
   * When a user clicks on a category, the category is set as the selected category
   * @param {Menu} category - Menu - this is the parameter that we are passing in from the
   * menu.ts file.
   */
  onSelected(category: Menu) {
    this.taskService.setSelectedCategory(category);
  }

}
