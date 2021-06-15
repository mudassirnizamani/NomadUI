import { NgModule } from '@angular/core';

// Importing Services - Mudasir Ali
import { SignoutService } from './services/signout/signout.service';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [SignoutService, UserService],
})
export class CoreModule {}
