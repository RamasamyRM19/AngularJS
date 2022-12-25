import { Component, Output, EventEmitter } from '@angular/core';
import { Menu } from './menu';
import { MENUS } from './default-category/default-menu';

@Component({
  selector: 'app-bottom-left-bar',
  templateUrl: './bottom-left-bar.component.html',
  styleUrls: ['./bottom-left-bar.component.scss']
})

export class BottomLeftBarComponent {

  public MENUS: Menu[] = [
      { id: 1, name: 'My Day', icon: 'fa fa-sun-o', isLastDefaultCategory: false },
      { id: 2, name: 'Important', icon: 'fa fa-star-o', isLastDefaultCategory: false },
      { id: 3, name: 'Planned', icon: 'fa fa-calendar-o', isLastDefaultCategory: false },
      { id: 4, name: 'Assigned to me', icon: 'fa fa-user-o', isLastDefaultCategory: false },
      { id: 5, name: 'Tasks', icon: 'fa fa-home', isLastDefaultCategory: true }
    ];

  constructor() {}

  // onSubmit(event: any) {
  //   this.todoService.addTodo(this.todo);
  //   console.log(this.todo);
  //   this.todo = '';
  //   console.log("Entered");
  // }

  public category?: Menu;

  addNewCategoryMenu(event: any) {
    if (event.key == "Enter") {
      this.category = {
        id: this.MENUS.length,
        name: event.target.value,
        icon: "fa fa-list-ul",
        isLastDefaultCategory: false
      }
      this.MENUS.push(this.category);
      event.target.value = "";
    }
  }
}
