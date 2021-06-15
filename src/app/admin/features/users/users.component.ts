import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  isLoading: boolean = true;
  users: any;

  constructor(
    private userService: UserService,
    private message: NzMessageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.users = res.users;
          this.isLoading = false;
          this.message.success('Data Succueesfully fetched');
        } else if (!res.succeeded && res.code == 'ServerError') {
          this.isLoading = false;
          this.message.error(res.description);
        }
      },
      (res: any) => {
        this.isLoading = false;
        this.toastr.error("Server Didn't Respond", 'Plz try later');
      }
    );
  }
}
