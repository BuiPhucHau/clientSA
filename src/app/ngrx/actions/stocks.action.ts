import { createAction, props } from '@ngrx/store';
import { StockModel, StockResponse } from 'src/app/models/stock.model';

// lấy danh sách sản phẩm
export const get = createAction(
  '[Stock] Get Stock',
);

export const getSuccess = createAction(
  '[Stock] Get Stock Success',
  props<{ stockRespone: StockResponse }>()
);

export const getFailure = createAction(
  '[Stock] Get Stock Failure',
  props<{ error: any }>()
);

export const createStock = createAction(
  '[Stock] Create Stock',
  props<{ stock: StockModel }>()
);

export const createStockSuccess = createAction(
  '[Stock] Create Stock Success'
);

export const createStockFailure = createAction(
  '[Stock] Create Stock Failure',
  props<{ error: any }>()
);

// thêm sản phẩm lên server
