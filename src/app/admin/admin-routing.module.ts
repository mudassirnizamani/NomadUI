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
      {
        path: 'todos',
        loadChildren: () =>
          import('./features/todos/todos.module').then(
            (module) => module.TodosModule
          ),
      },
      {
        path: 'leads',
        loadChildren: () =>
          import('./features/leads/leads.module').then(
            (module) => module.LeadsModule
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
