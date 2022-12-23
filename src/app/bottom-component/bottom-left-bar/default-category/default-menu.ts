import { Menu } from '../menu';

export const MENUS: Menu[] = [
  { id: 1, name: 'My Day', icon: 'fa fa-sun-o', isLastDefaultCategory: false },
  { id: 2, name: 'Important', icon: 'fa fa-star-o', isLastDefaultCategory: false },
  { id: 3, name: 'Planned', icon: 'fa fa-calendar-o', isLastDefaultCategory: false },
  { id: 4, name: 'Assigned to me', icon: 'fa fa-user-o', isLastDefaultCategory: false },
  { id: 5, name: 'Tasks', icon: 'fa fa-home', isLastDefaultCategory: true }
];
