import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-default-category',
  templateUrl: './default-category.component.html',
  styleUrls: ['./default-category.component.scss']
})
export class DefaultCategoryComponent {

  @Input() menus?:Menu[];

}
