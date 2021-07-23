import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user/user.service';
import { getAllUsers, getAllUsersSuccess } from '../../actions/users/users.actions';

@Injectable()
export class usersEffects {
  loadUsers = createEffect(() =>
    this.actions.pipe(
      ofType(getAllUsers),
      exhaustMap(() =>
        this.userService.getAllUsers().pipe(
          map((users: any) => getAllUsersSuccess({users})),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private userService: UserService, private actions: Actions) {}
}
