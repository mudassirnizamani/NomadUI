import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';
import {
  getNotifications,
  getNotificationsSuccess,
} from '../../actions/notifications/notifcations.actions';

@Injectable()
export class notificationsEffects {
  loadNotifications = createEffect(() =>
    this.actions.pipe(
      ofType(getNotifications),
      exhaustMap(() =>
        this.notificationsService.getNotifications().pipe(
          map((notifications: any) =>
            getNotificationsSuccess({ notifications })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions: Actions,
    private notificationsService: NotificationsService
  ) {}
}
