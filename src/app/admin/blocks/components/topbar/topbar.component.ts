import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IUser } from 'src/app/core/models/IUser.interface';
import { SignoutService } from 'src/app/core/services/signout/signout.service';
import { getUser } from 'src/app/store/actions/user.actions ';
import { UserState } from 'src/app/store/reducers/user/user.reducer';
import { userSelector } from 'src/app/store/selectors/user/user.selectors';

// Declaring some javascript functions - Mudasir Ali
declare const toggle_sidebar_2: any;

@Component({
  selector: 'app-admin-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  profilePic: string;
  user$ = this.store.pipe(select(userSelector));

  constructor(private signoutService: SignoutService, private store: Store<UserState>) {}

  ngOnInit(): void {
    toggle_sidebar_2();
    this.store.dispatch(getUser());
    this.user$.subscribe((data) => {
      this.profilePic = data.profilePic;
    });
  }

  signout() {
    this.signoutService.signout();
  }
}
