import { createAction, props } from '@ngrx/store';
import { INotification } from 'src/app/core/models/INotification.interface';

export const getNotifications = createAction('[Notifcations] Get Notifcations');

export const getNotificationsSuccess = createAction(
  '[Notifcations] Get Notifcations Success',
  props<{ notifications: ReadonlyArray<INotification> }>()
);
