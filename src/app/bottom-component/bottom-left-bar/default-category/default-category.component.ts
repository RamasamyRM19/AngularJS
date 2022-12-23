import { Component } from '@angular/core';
import { MENUS } from '../default-category/default-menu';
import { Menu } from '../menu';

@Component({
  selector: 'app-default-category',
  templateUrl: './default-category.component.html',
  styleUrls: ['./default-category.component.scss']
})
export class DefaultCategoryComponent {

  public MENUS: Menu[] = [
    { id: 1, name: 'My Day', icon: 'fa fa-sun-o', isLastDefaultCategory: false },
    { id: 2, name: 'Important', icon: 'fa fa-star-o', isLastDefaultCategory: false },
    { id: 3, name: 'Planned', icon: 'fa fa-calendar-o', isLastDefaultCategory: false },
    { id: 4, name: 'Assigned to me', icon: 'fa fa-user-o', isLastDefaultCategory: false },
    { id: 5, name: 'Tasks', icon: 'fa fa-home', isLastDefaultCategory: true }
  ];

  

  public menus = MENUS;
  inputTxt = '';



  addToList() {
    if (this.inputTxt != '') {
      this.menus.push({ id: 5, name: 'Tasks', icon: 'fa fa-home', isLastDefaultCategory: true });
    }
  }

}
