import { createSelector } from '@ngrx/store';
import { IUser } from 'src/app/core/models/IUser.interface';
import { UserState } from '../../reducers/user/user.reducer';

export const userSelector = createSelector(
  (state: UserState) => state.user,
  (user: IUser) => user
);
