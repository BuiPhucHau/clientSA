import {StockResponse, StockModel} from "../../models/stock.model";
import {createAction, createReducer, on, props} from "@ngrx/store";
import {StockState} from "../states/stock.state";
import * as StocksActions from '../actions/stocks.action';

export const initialState: StockState = {
  stockList: [],
  stockResponse: <StockResponse>{},
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

export const stockReducer = createReducer(
  initialState,
  on(StocksActions.get, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoading: true,
      isSuccess: false,
      error: '',
    };
    return newState;
  }),
  on(StocksActions.getSuccess, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      stockResponse: action.stockRespone,
      isLoading: false,
      isSuccess: true,
      error: '',
    };
    return newState;
  }),

  on(StocksActions.getFailure, (state, action) => {
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

  on(StocksActions.createStock, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      stockList : [...state.stockList, action.stock],
      isLoadinngAdd: true,
      isSuccessAdd: false,
      error: '',
    };
    return newState;
  }),

  on(StocksActions.createStockSuccess, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoadinngAdd: false,
      isSuccessAdd: true,
      error: '',
    };
    return newState;
  }),

  on(StocksActions.createStockFailure, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoadinngAdd: false,
      isSuccessAdd: false,
      error: action.error,
    };
    return newState;
  }),
);




