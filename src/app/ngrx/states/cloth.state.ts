import { Products } from 'src/app/models/products.model';

export interface clothState {
  clothList: Products[];
  cartList: Products[];
  total: number;
  priceCloth: number;
}
