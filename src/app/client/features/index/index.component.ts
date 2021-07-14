import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IUser } from 'src/app/core/models/IUser.interface';
import { UserService } from 'src/app/core/services/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [DatePipe],
})
export class IndexComponent implements OnInit {
  datea: Date = new Date();
  date: any;
  user: IUser;
  isLoading: boolean = false;

  constructor(
    private datePipe: DatePipe,
    private userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.date = this.datePipe.transform(this.datea, 'dd/MM/yyyy');
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
