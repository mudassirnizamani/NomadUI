import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/core/models/IUser.interface';

export const getAllUsers = createAction('[Users] Get All Users');

export const getAllUsersSuccess = createAction(
  '[Users] Get All Users Success',
  props<{ users: ReadonlyArray<IUser> }>()
);
