import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from 'src/app/blocks/layouts/auth-layout/auth-layout.component';
import { ClientSignupComponent } from './components/client-signup/client-signup.component';
import { EmployeeSignupComponent } from './components/employee-signup/employee-signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

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
        path: 'auth',
        component: SigninComponent,
      },
      {
        path: 'auth/signup',
        component: SignupComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
