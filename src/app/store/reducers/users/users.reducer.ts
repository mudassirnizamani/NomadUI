import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from 'src/app/core/models/IUser.interface';
import { getAllUsers, getAllUsersSuccess } from '../../actions/users/users.actions';

export const usersFeatureKey = 'users';

export interface UsersState {
  users: ReadonlyArray<IUser>;
}

export const initialState: ReadonlyArray<IUser> = [];

export const reducer = createReducer(initialState
  , on(getAllUsersSuccess, (state, {users}) => [...users]));
