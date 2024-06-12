import { createAction, props } from '@ngrx/store';
import { Products, ProductsResponse } from 'src/app/models/products.model';
// lấy danh sách sản phẩm
export const get = createAction(
  '[Products] Get Products',

);
export const getSuccess = createAction(
  '[Products] Get Products Success',
  props<{ productRespone: ProductsResponse }>()
);
export const getFailure = createAction(
  '[Products] Get Products Failure',
  props<{ error: any }>()
);

// thêm sản phẩm lên server

export const add = createAction(
  '[Products] Add Products',
  props<{ product: Products }>()
);
export const addSuccess = createAction('[Products] Add Products Success');
export const addFailure = createAction(
  '[Products] Add Products Failure',
  props<{ error: any }>()
);

//xóa sản phẩm
export const del = createAction(
  '[Products] Remove Products API',
  props<{ id: number }>()
);

export const delSuccess = createAction('[Products] Remove Products Success');

export const delFailure = createAction(
  '[Products] Remove Products Failure',
  props<{ error: any }>()
);

// cập nhật sản phẩm
export const updateProduct = createAction(
  '[product] update product',
  props<{ product: Products }>()
);
export const updateProductSuccess = createAction(
  '[product] update product success'
);
export const updateProducttFailure = createAction(
  '[product] update product failure',
  props<{ error: any }>()
);

// mua sản phẩm (thêm vào giỏ hàng)
export const addToCart = createAction(
  '[Products] Buy Products',
  props<{ cloth: Products }>()
);

export const removeFormCart = createAction(
  '[Products] Remove Products',
  props<{ cloth: Products }>()
);

export const addToStock = createAction(
  '[Products] Add To Stock',
  props<{ cloth: Products }>()
);

export const removeFormStock = createAction(
  '[Products] Remove From Stock',
  props<{ cloth: Products }>()
);

