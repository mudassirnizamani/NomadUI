import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IUser } from 'src/app/core/models/IUser.interface';
import { getUser } from 'src/app/store/actions/user.actions ';
import { UserState } from 'src/app/store/reducers/user/user.reducer';
import { userSelector } from 'src/app/store/selectors/user/user.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$ = this.store.pipe(select(userSelector));
  userData: IUser;

  constructor(private store: Store<UserState>) {}

  ngOnInit(): void {
    this.store.dispatch(getUser());
    this.user$.subscribe((data) => {
      this.userData = data;
    });
  }
}
