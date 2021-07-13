import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, NzTypographyModule],
})
export class UserProfileRoutingModule {}
