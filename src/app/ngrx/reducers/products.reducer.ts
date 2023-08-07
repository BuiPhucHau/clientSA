import { createReducer, on } from '@ngrx/store';
import { ProductsState } from '../states/products.state';
import * as ProductsActions from '../actions/products.actions';

export const initialState: ProductsState = {
  productList: [],
  isLoading: false,
  isSuccess: false,
  error: '',
  isLoadingdel: false,
  isSuccessdel: false,
  isLoadinngAdd: false,
  isSuccessAdd: false,
};
// get
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

  // add

  on(ProductsActions.add, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      productList: [...state.productList, action.product],
      isLoadingAdd: true,
      isSuccessAdd: false,
      error: '',
    };
    return newState;
  }),

  on(ProductsActions.addSuccess, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,

      isLoadingAdd: false,
      isSuccessAdd: true,
      error: '',
    };
    return newState;
  }),

  on(ProductsActions.addFailure, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoadingAdd: false,
      isSuccessAdd: false,
      error: action.error,
    };
    return newState;
  }),

  // remove
  on(ProductsActions.del, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoadingdel: true,
      isSuccessdel: false,
      error: '',
    };
    return newState;
  }),

  on(ProductsActions.delSuccess, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,

      isLoadingdel: false,
      isSuccessdel: true,
      error: '',
    };
    return newState;
  }),

  on(ProductsActions.delFailure, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoadingdel: false,
      isSuccessdel: false,
      error: action.error,
    };
    return newState;
  })
);
