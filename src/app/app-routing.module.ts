import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './global-component/settings/settings.component';
import { HelpComponent } from './global-component/help/help.component';
import { AnnouncementComponent } from './global-component/announcement/announcement.component';
import { BottomComponent } from './bottom-component/bottom.component';

const routes: Routes = [
  { path: '', component: BottomComponent},
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'announcement', component: AnnouncementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
