import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BottomComponent } from './bottom.component';

import { BottomLeftBarComponent } from './bottom-left-bar/bottom-left-bar.component';
import { BottomCenterBarComponent } from './bottom-center-bar/bottom-center-bar.component';
import { BottomRightBarComponent } from './bottom-right-bar/bottom-right-bar.component';
import { DefaultCategoryComponent } from './bottom-left-bar/default-category/default-category.component';

@NgModule({
  declarations: [
    BottomComponent,
    DefaultCategoryComponent,
    BottomLeftBarComponent,
    BottomCenterBarComponent,
    BottomRightBarComponent
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
