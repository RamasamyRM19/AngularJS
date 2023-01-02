import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BottomComponent } from './bottom.component';
import { BottomLeftBarComponent } from './bottom-left-bar/bottom-left-bar.component';
import { BottomCenterBarComponent } from './bottom-center-bar/bottom-center-bar.component';
import { BottomRightBarComponent } from './bottom-right-bar/bottom-right-bar.component';
import { CategoryListComponent } from './bottom-left-bar/category-list/category-list.component';
import { CenterTaskComponent } from './bottom-center-bar/center-task/center-task.component';

@NgModule({
  declarations: [
    BottomComponent,
    CategoryListComponent,
    BottomLeftBarComponent,
    BottomCenterBarComponent,
    BottomRightBarComponent,
    CenterTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BottomComponent,
    BottomLeftBarComponent,
    BottomCenterBarComponent,
    BottomRightBarComponent
  ]
})
export class BottomModule { }
