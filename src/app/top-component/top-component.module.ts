import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top-component.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { AnnouncementComponent } from './announcement/announcement.component';
import { HelpComponent } from './help/help.component';
import { SettingsComponent } from '../settings/settings.component';
import { ProfileComponent } from '../profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    TopComponent,
    NavBarComponent,
    SearchBarComponent,
    AnnouncementComponent,
    HelpComponent,
    SettingsComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    TopComponent,
    NavBarComponent,
    SearchBarComponent,
    AnnouncementComponent,
    HelpComponent,
    SettingsComponent,
    ProfileComponent, 
    PageNotFoundComponent
  ]
})
export class TopComponentModule { }
