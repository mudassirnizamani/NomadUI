import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ToastrService } from 'ngx-toastr';
import { SigninModel } from '../../models/Signin.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  // variables
  SigninForm: FormGroup;
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
    this.SigninForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  // Getter Methods for FormControls - Mudasir Ali
  get UserName() {
    return this.SigninForm.get('userName') as FormControl;
  }

  get Password() {
    return this.SigninForm.get('password') as FormControl;
  }

  onSubmit() {
    if (this.SigninForm.invalid) {
      this.isLoading = true;
      for (const i in this.SigninForm.controls) {
        this.SigninForm.controls[i].markAsDirty();
        this.SigninForm.controls[i].updateValueAndValidity();
      }
      this.message.warning('Plz, Fill the Fields Correctly');
      this.isLoading = false;
    } else {
      this.isLoading = true;
      var model: SigninModel = {
        userName: this.UserName.value,
        password: this.Password.value,
      };

      this.authService.Sigin(model).subscribe(
        (res: any) => {
          if (!res.succeeded && res.code == 'UsernameNotFound') {
            this.message.error(res.description);
            this.isLoading = false;
          } else if (!res.succeeded && res.code == 'NotActivated') {
            this.message.error(res.description);
            this.isLoading = false;
          } else if (!res.succeeded && res.code == 'IncorrectPassword') {
            this.message.error(res.description);
            this.isLoading = false;
          } else if (!res.succeeded && res.code == 'InvalidCredentials') {
            this.message.error(res.description);
            this.isLoading = false;
          } else if (!res.succeeded && res.code == 'ServerError') {
            this.toastr.error(res.description, 'Plz try later');
            this.isLoading = false;
          } else if (res.succeeded) {
            localStorage.setItem('token', res.token);
            this.authService.GetUserRole(model.userName).subscribe(
              (res: any) => {
                if (!res.succeeded && res.code == 'UsernameNotFound') {
                  this.toastr.error(res.description, 'Role Not Found');
                  this.isLoading = false;
                } else if (!res.succeeded && res.code == 'ServerError') {
                  this.toastr.error(res.description, 'Role Not Found');
                  this.isLoading = false;
                } else if (res.succeeded) {
                  res.roles.forEach((role) => {
                    if (role == 'Client') {
                      localStorage.setItem('userType', 'Client');
                      this.SigninForm.reset();
                      this.isLoading = false;
                      this.toastr.success(
                        `Successfully signin as ${model.userName}`,
                        `Welcome to Client Dashboard`
                      );
                      this.router.navigateByUrl('/client');
                    } else if (role == 'Employee') {
                      localStorage.setItem('userType', 'Employee');
                      this.SigninForm.reset();
                      this.isLoading = false;
                      this.toastr.success(
                        `Successfully signin as ${model.userName}`,
                        `Welcome to Customer Dashboard`
                      );
                      this.router.navigateByUrl('/employee');
                    } else if (role == 'Admin') {
                      localStorage.setItem('userType', 'Admin');
                      this.SigninForm.reset();
                      this.isLoading = false;
                      this.toastr.success(
                        `Successfully signin as ${model.userName}`,
                        `Welcome to Admin Dashboard`
                      );
                      this.router.navigateByUrl('/admin');
                    } else {
                      this.isLoading = false;
                      this.toastr.error(
                        `Sorry ${model.userName}, We didn't found your Role`,
                        'Role Not Found'
                      );
                    }
                  });
                }
              },
              (error: any) => {
                this.isLoading = false;
                this.toastr.error("Server didn't respond", 'Plz try later');
              }
            );
          }
        },
        (error: any) => {
          this.isLoading = false;
          this.toastr.error("Server didn't respond", 'Plz try later');
        }
      );
    }
  }
}
