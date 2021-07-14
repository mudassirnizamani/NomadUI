import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexModule } from 'src/app/admin/features/index/index.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
import { NotificationsModule } from './notifications/notifications.module';

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
