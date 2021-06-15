import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/core/models/UserModel.interface';

// Importing Services - Mudasir Ali
import { UserService } from 'src/app/core/services/user/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userName: string;
  notFound: boolean = false;
  user: UserModel;
  EditForm: FormGroup;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private toastr: ToastrService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.userName = this.route.snapshot.params['username'];

    // Edit Form START - Mudasir Ali
    this.EditForm = new FormGroup({
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
      confirmPassword: new FormControl('', [Validators.required]),
    });
    // Edit Form END

    this.userService.gerUserByUserName(this.userName).subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.user = res.user;
          this.isLoading = false;
          this.message.success('Data fetched Successfully');
        } else if (!res.succeeded && res.code == "UsernameNotFound")
        {
          this.isLoading = false;
          this.notFound = true;
          this.message.error(res.description);
        }
      },
      (error: any) => {
        this.isLoading = false;
        this.toastr.error("Server didn't respond", 'Plz try later');
      }
    );
  }
}
