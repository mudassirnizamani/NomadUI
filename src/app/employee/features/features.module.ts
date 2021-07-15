import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsModule } from './settings/settings.module';
import { ProfileModule } from './profile/profile.module';
import { NotificationsModule } from './notifications/notifications.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SettingsModule, NotificationsModule, ProfileModule],
})
export class EmployeeFeaturesModule {}
