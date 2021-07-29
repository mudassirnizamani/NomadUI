import { NgModule } from '@angular/core';

// Importing Services - Mudasir Ali
import { SignoutService } from './services/signout/signout.service';
import { UserService } from './services/user/user.service';
import { NotificationsService } from './services/notifications/notifications.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [SignoutService, UserService, NotificationsService],
})
export class CoreModule {}
