import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponentModule } from './global-component/global-component.module';
import { BottomModule } from './bottom-component/bottom.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalComponentModule,
    BottomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
