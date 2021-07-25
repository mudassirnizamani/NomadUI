import { createFeatureSelector, createSelector } from '@ngrx/store';
import { INotification } from 'src/app/core/models/INotification.interface';
import { NotificationsState } from '../../reducers/notifications/notifcations.reducer';

export const notificationsSelector = createSelector(
  (state: NotificationsState) => state.notifications,
  (notifications: INotification[]) => notifications
);
