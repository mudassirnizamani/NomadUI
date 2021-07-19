import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { DetailsComponent } from './components/details/details.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';


@NgModule({
  declarations: [
    ProfileComponent,
    DetailsComponent,
    ProfileDetailsComponent
  ],
  imports: [
    CommonModule,
    NzTypographyModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
