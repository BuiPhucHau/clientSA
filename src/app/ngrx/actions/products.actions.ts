import { createAction, props } from '@ngrx/store';
import { Products } from 'src/app/models/products.model';
// lấy danh sách sản phẩm
export const get = createAction(
  '[Products] Get Products',
  props<{ idToken: string }>()
);
export const getSuccess = createAction(
  '[Products] Get Products Success',
  props<{ productList: Products[] }>()
);
export const getFailure = createAction(
  '[Products] Get Products Failure',
  props<{ error: any }>()
);

// thêm sản phẩm lên server

export const add = createAction(
  '[Products] Add Products',
  props<{ product: Products; idToken: string }>()
);
export const addSuccess = createAction('[Products] Add Products Success');
export const addFailure = createAction(
  '[Products] Add Products Failure',
  props<{ error: any }>()
);

//xóa sản phẩm
export const del = createAction(
  '[Products] Remove Products API',
  props<{ id: string; idToken: string }>()
);

export const delSuccess = createAction('[Products] Remove Products Success');

export const delFailure = createAction(
  '[Products] Remove Products Failure',
  props<{ error: any }>()
);

// cập nhật sản phẩm
export const updateProduct = createAction(
  '[product] update product',
  props<{ product: Products; idToken: string }>()
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

// IdToken
export const setIdToken = createAction(
  '[Auth] Login Success',
  props<{ idToken: string }>()
);
