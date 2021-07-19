import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/core/models/IUser.interface';

export const getUser = createAction('[User] Get User');

export const getUserSuccess = createAction(
  '[User] Get User Success',
  props<IUser>()
);
