import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './global-component/nav-bar-component/nav-bar-component.component';
import { SearchBarComponentComponent } from './global-component/search-bar-component/search-bar-component.component';
import { BottomLeftBarComponentComponent } from './global-component/bottom-left-bar-component/bottom-left-bar-component.component';
import { BottomCenterBarComponentComponent } from './global-component/bottom-center-bar-component/bottom-center-bar-component.component';
import { BottomRightBarComponentComponent } from './global-component/bottom-right-bar-component/bottom-right-bar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    SearchBarComponentComponent,
    BottomLeftBarComponentComponent,
    BottomCenterBarComponentComponent,
    BottomRightBarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
