import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { UserInfor } from 'src/app/models/user-info';
import * as UserInforActions from '../actions/user.action';
import {UserService} from 'src/app/services/user.service';
@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserInforActions.createUser),
      exhaustMap((action) =>
        this.userService.createUser(action.userInfor).pipe(
          map((value) => {
            console.log('createUser:', value);
            return UserInforActions.createUserSuccess();
          }),
          catchError((error) => of(UserInforActions.createUserFailure({ error })))
        )
      )
    )
  );
}
