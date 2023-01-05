import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalComponentComponent } from './global-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { AnnouncementComponent } from './announcement/announcement.component';
import { HelpComponent } from './help/help.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    GlobalComponentComponent,
    NavBarComponent,
    SearchBarComponent,
    AnnouncementComponent,
    HelpComponent,
    SettingsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    GlobalComponentComponent,
    NavBarComponent,
    SearchBarComponent
  ]
})
export class GlobalComponentModule { }
