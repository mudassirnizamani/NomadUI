import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/core/models/IUser.interface';
import { UserService } from 'src/app/core/services/user/user.service';
import { getAllUsers } from 'src/app/store/actions/users/users.actions';
import { UsersState } from 'src/app/store/reducers/users/users.reducer';
import { usersSelector } from 'src/app/store/selectors/users/users.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  isLoading: boolean = true;
  users: IUser[];
  users$ = this.store.pipe(select(usersSelector))

  constructor(
    private userService: UserService,
    private message: NzMessageService,
    private toastr: ToastrService,
    private store: Store<UsersState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getAllUsers())
    this.users$.subscribe((data: IUser[]) => {
      this.users = data;
      this.isLoading = false
    })
  }
}
