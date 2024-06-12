import { createAction, props } from '@ngrx/store';
import { UserInfor } from 'src/app/models/user-info';

export const createUser = createAction(
  '[User] Create User',
  props<{ userInfor: UserInfor }>()
);

export const createUserSuccess = createAction(
  '[User] Create User Success'
);

export const createUserFailure = createAction(
  '[User] Create User Failure',
  props<{ error: any }>()
);
