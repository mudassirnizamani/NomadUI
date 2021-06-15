import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIndexLayoutComponent } from './blocks/layouts/index-layout/index-layout.component';
import { IndexComponent } from './features/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: AdminIndexLayoutComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./features/users/users.module').then(
            (module) => module.UsersModule
          ),
      },
      {
        path: 'users/profile/:username',
        loadChildren: () =>
          import('./features/user-profile/user-profile.module').then(
            (module) => module.UserProfileModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
