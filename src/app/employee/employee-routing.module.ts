import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexLayoutComponent } from './blocks/layouts/index-layout/index-layout.component';
import { IndexComponent } from './features/index/components/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexLayoutComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./features/profile/profile.module').then(
            (module) => module.ProfileModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./features/settings/settings.module').then(
            (module) => module.SettingsModule
          ),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./features/notifications/notifications.module').then(
            (module) => module.NotificationsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
