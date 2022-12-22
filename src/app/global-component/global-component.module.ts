import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavBarComponentComponent } from './bottom-nav-bar-component/bottom-nav-bar-component.component';
import { BottomLeftBarComponentComponent } from './bottom-left-bar-component/bottom-left-bar-component.component';
import { BottomCenterBarComponentComponent } from './bottom-center-bar-component/bottom-center-bar-component.component';
import { BottomRightBarComponentComponent } from './bottom-right-bar-component/bottom-right-bar-component.component';



@NgModule({
  declarations: [
    BottomNavBarComponentComponent,
    BottomLeftBarComponentComponent,
    BottomCenterBarComponentComponent,
    BottomRightBarComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GlobalComponentModule { }
