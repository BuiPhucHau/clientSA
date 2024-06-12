import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Products, WrappedProduct} from "../models/products.model";
import {StockModel, StockResponse, WrappedStock} from "../models/stock.model";


@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor(private httpClinet: HttpClient) {}
  private wrapWithData<T>(obj: T): { data: T } {
    return { data: obj };
  }
  postStock(stock: StockModel) {
    const wrappedStock = this.wrapWithData(stock);

    return this.httpClinet.post<WrappedProduct>(
      'http://localhost:55811/v1/Stock',
      wrappedStock
    );
  }

  getStock() {
    console.log('getProducts');
    return this.httpClinet.get<StockResponse>('http://localhost:55811/v1/Stock/total', {
    });

  }
}
