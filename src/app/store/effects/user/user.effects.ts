import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from 'src/app/core/services/user/user.service';
import { getUser, getUserSuccess } from '../../actions/user.actions ';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class UserEffects {
  loadUser = createEffect(() =>
    this.actions.pipe(
      ofType(getUser),
      exhaustMap(() =>
        this.userService.getAuthenticatedUser().pipe(
          map((user: any) => getUserSuccess(user.user)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions: Actions, private userService: UserService) {}
}
