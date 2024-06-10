import { createReducer, on } from '@ngrx/store';
import * as ProductsActions from '../actions/products.actions';
import { AuthState } from '../states/auth.state';

export const initialState: AuthState = {
  idToken: '',
  // ... other initial state properties
};
/*export const authReducer = createReducer(
  initialState,
  on(ProductsActions.setIdToken, (state, action) => {
    console.log(action.type);
    return {
      ...state,
      idToken: action.idToken,
    };
  })
);*/
