import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/core/models/UserModel.interface';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  user: UserModel;
  isLoading: boolean = false;

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userService.getAuthenticatedUser().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.user = res.user;
        } else if (!res.succeeded && res.code == 'ServerError') {
          this.toastr.error(res.description);
        }
      },
      (error: any) => {
        this.isLoading = false;
        this.toastr.error("Server didn't respond", 'Plz try later');
      }
    );
  }
}
