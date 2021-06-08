import { NgModule } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { EmployeeSignupComponent } from './components/employee-signup/employee-signup.component';
import { ClientSignupComponent } from './components/client-signup/client-signup.component';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Importing AntDesign Modules - Mudasir Ali
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { RouterModule } from '@angular/router';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    EmployeeSignupComponent,
    ClientSignupComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzTypographyModule,
    NzIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
