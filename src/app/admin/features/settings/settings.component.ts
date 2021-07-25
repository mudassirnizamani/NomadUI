import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IUser } from 'src/app/core/models/IUser.interface';
import { getUser } from 'src/app/store/actions/user.actions ';
import { UserState } from 'src/app/store/reducers/user/user.reducer';
import { userSelector } from 'src/app/store/selectors/user/user.selectors';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  user: IUser;
  user$ = this.store.select(userSelector);
  ProfileForm: FormGroup;
  PasswordForm: FormGroup;

  constructor(
    private store: Store<UserState>,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getUser());
    this.user$.subscribe((data) => {
      this.user = data;
    });

    // Edit Form START - Mudasir Ali
    this.ProfileForm = new FormGroup({
      userName: new FormControl(this.user.userName, []),
      firstName: new FormControl(this.user.firstName, [
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      lastName: new FormControl(this.user.lastName, [
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      email: new FormControl(this.user.email, []),
      phoneNumber: new FormControl(this.user.phoneNumber, [
        Validators.pattern('^[0-9]*$'),
      ]),
    });
    // Edit Form END

    this.PasswordForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  get FirstName() {
    return this.ProfileForm.get('firstName') as FormControl;
  }

  get LastName() {
    return this.ProfileForm.get('lastName') as FormControl;
  }

  get PhoneNumber() {
    return this.ProfileForm.get('phoneNumber') as FormControl;
  }

  get Password() {
    return this.PasswordForm.get('password') as FormControl;
  }

  get ConfirmPassword() {
    return this.PasswordForm.get('confirmPassword') as FormControl;
  }

  onProfileSubmit() {
    if (this.ProfileForm.invalid) {
      for (const i in this.ProfileForm.controls) {
        this.ProfileForm.controls[i].markAsDirty();
        this.ProfileForm.controls[i].updateValueAndValidity();
      }
      this.message.warning('Plz, Fill the Fields Correctly');
    } else {
    }
  }

  onPasswordSubmit() {
    if (this.PasswordForm.invalid) {
      for (const i in this.ProfileForm.controls) {
        this.PasswordForm.controls[i].markAsDirty();
        this.PasswordForm.controls[i].updateValueAndValidity();
      }
      this.message.warning('Plz, Fill the Fields Correctly');
    } else {
    }
  }
}
