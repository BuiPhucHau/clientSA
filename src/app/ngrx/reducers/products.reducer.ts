import { createReducer, on } from '@ngrx/store';
import { ProductsState } from '../states/products.state';
import * as ProductsActions from '../actions/products.actions';
import {ProductsResponse} from "../../models/products.model";

export const initialState: ProductsState = {
  productList: [],
  productResponse: <ProductsResponse>{},
  isLoading: false,
  isSuccess: false,
  error: '',
  isLoadingdel: false,
  isSuccessdel: false,
  isLoadinngAdd: false,
  isSuccessAdd: false,
  isUpSuccess: false,
  isUpLoading: false,
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
      productList: action.productRespone.products,
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
  }),

  // update

  on(ProductsActions.updateProduct, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isUpLoading: true,
      isUpSuccess: false,
      error: '',
    };
    return newState;
  }),
  on(ProductsActions.updateProductSuccess, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isUpLoading: false,
      isUpSuccess: true,
    };
    return newState;
  }),
  on(ProductsActions.updateProducttFailure, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isUpLoading: false,
      isUpSuccess: false,
      error: action.error,
    };
    console.log(newState.error);
    return newState;
  })
);
