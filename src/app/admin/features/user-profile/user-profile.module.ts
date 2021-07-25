import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { DetailsComponent } from './components/details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [
    UserProfileComponent,
    ProfileDetailsComponent,
    DetailsComponent,
  ],
  imports: [CommonModule, SharedModule, UserProfileRoutingModule, ReactiveFormsModule, FormsModule, NzInputModule],
})
export class UserProfileModule {}
