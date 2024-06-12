import {StockModel} from "./stock.model";

export interface Products {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
  category: string;
  stock:number;
}

export interface ProductsResponse {
  products: Products[];
  stocks:StockModel[];
}

export interface WrappedProduct {
  data: Products;
}
