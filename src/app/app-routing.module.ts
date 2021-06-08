import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing Componennts
import { AuthLayoutComponent } from './blocks/layouts/auth-layout/auth-layout.component';
import { ClientSignupComponent } from './features/auth/components/client-signup/client-signup.component';
import { EmployeeSignupComponent } from './features/auth/components/employee-signup/employee-signup.component';
import { SigninComponent } from './features/auth/components/signin/signin.component';
import { SignupComponent } from './features/auth/components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: SigninComponent,
      },
      {
        path: 'auth/signup',
        component: SignupComponent,
      },
      {
        path: 'auth',
        component: SigninComponent,
      },
      {
        path: 'auth/employee',
        component: EmployeeSignupComponent,
      },
      {
        path: 'auth/client',
        component: ClientSignupComponent,
      },
      {
        path: 'auth/signin',
        component: SigninComponent,
      },
    ],
  },
  {
    path: 'admin',
    loadChildren: () => import("./admin/admin.module").then(
      module => module.AdminModule
    )
  },
  {
    path: 'client',
    loadChildren: () => import("./client/client.module").then(
      module => module.ClientModule
    )
  },
  {
    path: 'employee',
    loadChildren: () => import("./employee/employee.module").then(
      module => module.EmployeeModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
