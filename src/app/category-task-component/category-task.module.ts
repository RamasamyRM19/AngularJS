import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { CategoryTaskComponent } from './category-task.component';
import { CategoryComponent } from './category/category.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CenterTaskComponent } from './task-list/center-task/center-task.component';
import { FilterTaskPipe } from '../pipe/filter-task.pipe';

@NgModule({
  declarations: [
    CategoryTaskComponent,
    CategoryListComponent,
    CategoryComponent,
    TaskListComponent,
    TaskDetailsComponent,
    CenterTaskComponent,
    FilterTaskPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CategoryTaskComponent,
    CategoryComponent,
    TaskListComponent,
    TaskDetailsComponent
  ]
})
export class CategoryTaskModule { }
