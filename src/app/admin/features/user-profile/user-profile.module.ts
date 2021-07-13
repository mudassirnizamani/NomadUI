import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    ProfileDetailsComponent,
    DetailsComponent,
  ],
  imports: [CommonModule, SharedModule, UserProfileRoutingModule],
})
export class UserProfileModule {}
