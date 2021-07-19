import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from 'src/app/core/models/IUser.interface';
import { getUser, getUserSuccess } from '../../actions/user.actions ';

export const userFeatureKey = 'user';

export interface UserState {
  user: IUser;
}

export const initialState: any = {};

export const reducer = createReducer(
  initialState,
  on(getUserSuccess, (state, user) => user)
);
