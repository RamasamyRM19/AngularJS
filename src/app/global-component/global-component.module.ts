import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponentComponent } from './global-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    GlobalComponentComponent,
    NavBarComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GlobalComponentComponent,
    NavBarComponent,
    SearchBarComponent
  ]
})
export class GlobalComponentModule { }
