import {UserInfor} from "../../models/user-info";
import {createAction, createReducer, on, props} from "@ngrx/store";
import {UserInforState} from "../states/user.state";
import * as UserInforActions from '../actions/user.action';



export const initialState: UserInforState = {
  userInfor: <UserInfor>{},
  error: '',
  isLoading: false,
  isSuccess: false,
  isLoadinngAdd: false,
  isSuccessAdd: false,

};

export const userReducer = createReducer(
  initialState,
  on(UserInforActions.createUser, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      userInfor: action.userInfor,
      isLoading: true,
      isSuccess: false,
      error: '',
    };
    return newState;
  }),
  on(UserInforActions.createUserSuccess, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoading: false,
      isSuccess: true,
      error: '',
    };
    return newState;
  }),

  on(UserInforActions.createUserFailure, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoading: false,
      isSuccess: false,
      error: action.error,
    };
    return newState;
  }),
  // add
);
