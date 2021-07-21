import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
import { NotificationsModule } from './notifications/notifications.module';
import { IndexModule } from './index/index.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IndexModule,
    ProfileModule,
    SettingsModule,
    NotificationsModule,
  ],
})
export class ClientFeaturesModule {}
