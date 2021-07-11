import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ToastrService } from 'ngx-toastr';
import { ClientModel } from '../../models/ClientSignup.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-client-signup',
  templateUrl: './client-signup.component.html',
  styleUrls: ['./client-signup.component.scss'],
})
export class ClientSignupComponent implements OnInit {
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
      var model: ClientModel = {
        userName: this.UserName.value,
        firstName: this.FirstName.value,
        lastName: this.LastName.value,
        email: this.Email.value,
        phoneNumber: this.PhoneNumber.value,
        password: this.ConfirmPassword.value,
        profilePic: '/assets/images/users-default-profile-pic.jpg',
      };

      this.authService.ClientSignup(model).subscribe(
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
