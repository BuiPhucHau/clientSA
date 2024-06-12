import {Products} from "./products.model";

export interface StockModel {
  id: number;
  prodID: number;
  quantity: number;
}

export interface WrappedStock {
  data: number;
}

export interface StockResponse {
  total: number;

}
