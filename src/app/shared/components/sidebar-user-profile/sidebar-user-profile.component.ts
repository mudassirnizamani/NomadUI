import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IUser } from 'src/app/core/models/IUser.interface';
import { UserService } from 'src/app/core/services/user/user.service';
import { getUser } from 'src/app/store/actions/user.actions ';
import { UserState } from 'src/app/store/reducers/user/user.reducer';
import { userSelector } from 'src/app/store/selectors/user/user.selectors';

@Component({
  selector: 'app-sidebar-user-profile',
  templateUrl: './sidebar-user-profile.component.html',
  styleUrls: ['./sidebar-user-profile.component.scss'],
})
export class SidebarUserProfileComponent implements OnInit {
  isLoading: boolean = false;
  userData: IUser;
  user$ = this.store.pipe(select(userSelector));

  constructor(
    private userService: UserService,
    private store: Store<UserState>
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    // this.userService.getAuthenticatedUser().subscribe(
    //   (res: any) => {
    //     if (res.succeeded) {
    //       this.userData = res.user;
    //       this.isLoading = false;
    //     } else if (!res.succeeded && res.code == 'ServerError') {
    //       this.userData.firstName = 'Error';
    //     }
    //   },
    //   (error: any) => {
    //     this.userData.firstName = 'Error';
    //     this.isLoading = false;
    //   }
    // );
    this.store.dispatch(getUser());
    this.user$.subscribe((data) => {
      this.userData = data;
      this.isLoading = false;
    });
  }
}
