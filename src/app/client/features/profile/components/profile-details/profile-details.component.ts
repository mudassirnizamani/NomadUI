import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IUser } from 'src/app/core/models/IUser.interface';
import { getUser } from 'src/app/store/actions/user.actions ';
import { UserState } from 'src/app/store/reducers/user/user.reducer';
import { userSelector } from 'src/app/store/selectors/user/user.selectors';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit {
  @Input() userData: IUser;

  constructor() {}

  ngOnInit(): void {}
}
