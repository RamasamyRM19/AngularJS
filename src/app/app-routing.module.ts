import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './global-component/help/help.component';
import { AnnouncementComponent } from './global-component/announcement/announcement.component';
import { CategoryTaskComponent } from './category-task-component/category-task.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './global-component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: CategoryTaskComponent},
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'announcement', component: AnnouncementComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
