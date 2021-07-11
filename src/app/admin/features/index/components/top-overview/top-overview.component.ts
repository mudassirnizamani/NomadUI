import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-admin-top-overview',
  templateUrl: './top-overview.component.html',
  styleUrls: ['./top-overview.component.scss'],
})
export class TopOverviewComponent implements OnInit {
  allUsersCount: number;
  isLoading: boolean = false;

  constructor(
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsersCount().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.allUsersCount = res.count;
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
