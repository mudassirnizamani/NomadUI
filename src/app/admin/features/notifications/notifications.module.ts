import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { NotificationComponent } from './components/notification/notification.component';


@NgModule({
  declarations: [
    NotificationsComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
