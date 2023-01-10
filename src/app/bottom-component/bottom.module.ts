import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BottomComponent } from './bottom.component';
import { CategoryComponent } from './category/category.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CenterTaskComponent } from './task-list/center-task/center-task.component';
import { FilterTaskPipe } from '../pipe/filter-task.pipe';

@NgModule({
  declarations: [
    BottomComponent,
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
    BottomComponent,
    CategoryComponent,
    TaskListComponent,
    TaskDetailsComponent
  ]
})
export class BottomModule { }
