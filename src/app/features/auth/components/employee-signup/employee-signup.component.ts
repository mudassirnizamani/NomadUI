import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { EmployeeModel } from '../../models/EmployeeSignup.interface';
import { ToastrService } from 'ngx-toastr';

// Declared some variables for JavaScript - Mudasir Ali
declare const themeSwitch: any;

@Component({
  selector: 'app-employee-signup',
  templateUrl: './employee-signup.component.html',
  styleUrls: ['./employee-signup.component.scss'],
})
export class EmployeeSignupComponent implements OnInit {
  // variables
  SignupForm: FormGroup;
  isLoading: boolean = false;
  passwordVisible = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private message: NzMessageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'Admin'
    ) {
      this.toastr.info(`You are already Signed In`, 'Already Signed In');
      this.router.navigateByUrl('/admin');
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'Client'
    ) {
      this.toastr.info(`You are already Signed In`, 'Already Signed In');
      this.router.navigateByUrl('/client');
    } else if (
      localStorage.getItem('token') != null &&
      localStorage.getItem('userType') == 'Employee'
    ) {
      this.toastr.info(`You are already Signed In`, 'Already Signed In');
      this.router.navigateByUrl('/employee');
    }

    // Signup Form for Signup Page - Mudasir Ali
    this.SignupForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl(0, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        this.passwordMatchingValidator,
      ]),
    });
  }

  // Getter Methods for FormControls - Mudasir Ali
  get UserName() {
    return this.SignupForm.get('userName') as FormControl;
  }

  get FirstName() {
    return this.SignupForm.get('firstName') as FormControl;
  }

  get LastName() {
    return this.SignupForm.get('lastName') as FormControl;
  }

  get Email() {
    return this.SignupForm.get('email') as FormControl;
  }

  get PhoneNumber() {
    return this.SignupForm.get('phoneNumber') as FormControl;
  }

  get Password() {
    return this.SignupForm.get('password') as FormControl;
  }

  get ConfirmPassword() {
    return this.SignupForm.get('confirmPassword') as FormControl;
  }

  // Validation function for Matching Password and Confirm Password - Mudasir Ali
  passwordMatchingValidator = (
    control: FormControl
  ): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.SignupForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  onSubmit() {
    if (this.SignupForm.invalid) {
      this.isLoading = true;
      for (const i in this.SignupForm.controls) {
        this.SignupForm.controls[i].markAsDirty();
        this.SignupForm.controls[i].updateValueAndValidity();
      }
      this.message.warning('Plz, Fill the Fields Correctly');
      this.isLoading = false;
    } else {
      this.isLoading = true;
      var model: EmployeeModel = {
        userName: this.UserName.value,
        firstName: this.FirstName.value,
        lastName: this.LastName.value,
        email: this.Email.value,
        phoneNumber: this.PhoneNumber.value,
        password: this.ConfirmPassword.value,
        profilePic: '/assets/images/users-default-profile-pic.jpg',
      }

      this.authService.EmployeeSignup(model).subscribe(
        (res: any) => {
          if (res.succeeded) {
            this.SignupForm.reset();
            this.toastr.success(
              `Account for '${model.userName}, is Successfully created '`,
              'Account is created'
            );
            this.isLoading = false;
            this.router.navigateByUrl('auth/signin');
          } else if (!res.succeeded && res.error == 'DuplicateEmail') {
            this.message.error(res.description);
            this.isLoading = false;
          } else if (!res.succeeded && res.error == 'ServerError') {
            this.toastr.error(res.description, 'ServerError');
            this.isLoading = false;
          } else {
            res.errors.forEach((element) => {
              switch (element.code) {
                case 'DuplicateUserName':
                  this.message.error(
                    `Username '${model.userName}' is already taken`
                  );
                  this.isLoading = false;
                  break;
                default:
                  this.toastr.error(element.description, 'Signup Failed');
                  this.isLoading = false;
                  break;
              }
            });
          }
        },
        (error: any) => {
          this.toastr.error("Server didn't respond", 'Plz try later');
          this.isLoading = false;
        }
      );
    }
  }
}
