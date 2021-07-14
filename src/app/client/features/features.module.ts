import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexModule } from 'src/app/admin/features/index/index.module';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, IndexModule, ProfileModule],
})
export class ClientFeaturesModule {}
