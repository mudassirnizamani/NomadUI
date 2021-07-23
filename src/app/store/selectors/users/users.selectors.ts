import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUser } from 'src/app/core/models/IUser.interface';
import { UsersState } from '../../reducers/users/users.reducer';

export const usersSelector = createSelector(
  (state: UsersState) => state.users,
  (users: IUser[]) => users
)