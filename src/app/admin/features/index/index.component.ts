import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/core/models/IUser.interface';
import { UserService } from 'src/app/core/services/user/user.service';
import { getUser } from 'src/app/store/actions/user.actions ';
import { UserState } from 'src/app/store/reducers/user/user.reducer';
import { userSelector } from 'src/app/store/selectors/user/user.selectors';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  isLoading: boolean = false;
  user: IUser;
  user$ = this.store.pipe(select(userSelector));

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private store: Store<UserState>
  ) {}

  ngOnInit(): void {
    // this.userService.getAuthenticatedUser().subscribe(
    //   (res: any) => {
    //     if (res.succeeded) {
    //       this.user = res.user;
    //     } else if (!res.succeeded && res.code == 'ServerError') {
    //       this.toastr.error(res.description);
    //     }
    //   },
    //   (error: any) => {
    //     this.isLoading = false;
    //     this.toastr.error("Server didn't respond", 'Plz try later');
    //   }
    // );
    this.store.dispatch(getUser());
    this.user$.subscribe((data) => {
      this.user = data;
    });
  }
}
