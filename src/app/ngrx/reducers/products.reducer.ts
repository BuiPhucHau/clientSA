import { createReducer, on } from '@ngrx/store';
import { ProductsState } from '../states/products.state';
import * as ProductsActions from '../actions/products.actions';

export const initialState: ProductsState = {
  productList: [],
  isLoading: false,
  isSuccess: false,
  error: '',
};

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.get, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoading: true,
      isSuccess: false,
      error: '',
    };
    return newState;
  }),
  on(ProductsActions.getSuccess, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      productList: action.productList,
      isLoading: false,
      isSuccess: true,
      error: '',
    };
    return newState;
  }),

  on(ProductsActions.getFailure, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoading: false,
      isSuccess: false,
      error: action.error,
    };
    return newState;
  }),

  on(ProductsActions.add, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoading: true,
      isSuccess: false,
      error: '',
    };
    return newState;
  }),

  on(ProductsActions.addSuccess, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      productList: [...state.productList, action.product],
      isLoading: false,
      isSuccess: true,
      error: '',
    };
    return newState;
  }),

  on(ProductsActions.addFailure, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoading: false,
      isSuccess: false,
      error: action.error,
    };
    return newState;
  })
);
