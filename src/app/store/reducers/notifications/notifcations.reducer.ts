import { Action, createReducer, on } from '@ngrx/store';
import { INotification } from 'src/app/core/models/INotification.interface';
import {
  getNotifications,
  getNotificationsSuccess,
} from '../../actions/notifications/notifcations.actions';

export const notifcationsFeatureKey = 'notifcations';

export interface NotificationsState {
  notifications: ReadonlyArray<INotification>;
}

export const initialState: ReadonlyArray<INotification> = [];

export const reducer = createReducer(
  initialState,
  on(getNotificationsSuccess, (state, { notifications }) => [...notifications])
);
