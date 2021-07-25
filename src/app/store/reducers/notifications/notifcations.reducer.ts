import { Action, createReducer, on } from '@ngrx/store';
import { INotification } from 'src/app/core/models/INotification.interface';
import { getNotifications } from '../../actions/notifications/notifcations.actions';


export const notifcationsFeatureKey = 'notifcations';

export interface NotificationsState {
  notifications: ReadonlyArray<INotification>
}

export const initialState: ReadonlyArray<INotification> = [];


export const reducer = createReducer(
  initialState,
  on(getNotifications, (state) => [...mockNotifications()])
);

function mockNotifications(): INotification[] {
 const notificaiont_1: INotification = {
   createdAt: 'asd1234123',
   seen: false,
   text: 'this i sjust asdasd',
   userId: '134124124dsad',
   userName: 'Mudasir \ALi',
   userProfile: 'masasd',
   userType: 'klmnaskasd',

 };
 const notification_2: INotification = {
  createdAt: '2019123',
  seen: true,
  text: 'A new accout have created, Mudasir Ali',
  userId: 'aasf123asgasd',
  userName: 'mudasir',
  userProfile: 'Muasfioasdad',
  userType: 'Admin'
 }
 return [notificaiont_1, notification_2]
}