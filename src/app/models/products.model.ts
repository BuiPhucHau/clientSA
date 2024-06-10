export interface Products {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
  category: string;
  stock:number;
}

export interface WrappedProduct {
  data: Products;
}
