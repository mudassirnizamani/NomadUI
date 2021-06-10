import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing Guards
import { AdminGuard } from './core/guards/admin/admin.guard';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { ClientGuard } from './core/guards/client/client.guard';
import { EmployeeGuard } from './core/guards/employee/employee.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/auth/auth.module').then((module) => module.AuthModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((module) => module.AdminModule),
    canActivate: [AdminGuard],
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./client/client.module').then((module) => module.ClientModule),
    canActivate: [ClientGuard],
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then(
        (module) => module.EmployeeModule
      ),
    canActivate: [EmployeeGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
