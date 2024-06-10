import { createReducer, on } from '@ngrx/store';
import * as ProductsActions from '../actions/products.actions';
import { clothState } from '../states/cloth.state';

export const initialState: clothState = {
  clothList: [],
  cartList: [],
  total: 0,
  priceCloth: 0,
};

export const clothReducer = createReducer(
  initialState,
  on(ProductsActions.addToCart, (state, action) => {
    console.log(action.type);
    const cartList = [...state.cartList];
    const index = cartList.findIndex((item) => item.id === action.cloth.id);
    if (index !== -1) {
      cartList[index] = {
        ...cartList[index],
        stock: cartList[index].stock + 1,
        price: cartList[index].price * cartList[index].stock,
      };
    } else {
      cartList.push({
        ...action.cloth,
        stock: 1,
      });
    }
    // const priceCloth =
    //   state.priceCloth + action.cloth.price * action.cloth.stock;
    // console.log(priceCloth);
    const total = state.total + action.cloth.price;
    let newState = {
      ...state,
      cartList,
      total,
    };
    return newState;
  }),

  on(ProductsActions.removeFormCart, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      cartList: state.cartList.filter((item) => item.id !== action.cloth.id),
      total: state.total - action.cloth.price * action.cloth.stock,
    };
    return newState;
  }),

  on(ProductsActions.addToStock, (state, action) => {
    console.log(action.type);
    let cartList = [...state.cartList];
    const index = cartList.findIndex((item) => item.id === action.cloth.id);
    if (index !== -1) {
      cartList[index] = {
        ...cartList[index],
        stock: cartList[index].stock + 1,
      };
    }
    let newState = {
      ...state,
      total: state.total + action.cloth.price,
      cartList,
    };
    return newState;
  }),

  on(ProductsActions.removeFormStock, (state, action) => {
    console.log(action.type);
    let cartList = [...state.cartList];
    const index = cartList.findIndex((item) => item.id === action.cloth.id);
    if (index !== -1) {
      cartList[index] = {
        ...cartList[index],
        stock: cartList[index].stock - 1,
      };
    }

    if (cartList[index].stock === 0) {
      cartList = cartList.filter((item) => item.id !== action.cloth.id);
    }
    let newState = {
      ...state,
      total: state.total - action.cloth.price,
      cartList,
    };
    return newState;
  })
);
