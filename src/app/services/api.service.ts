import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Products, ProductsResponse, WrappedProduct} from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private wrapWithData<T>(obj: T): { data: T } {
    return { data: obj };
  }
  constructor(private httpClinet: HttpClient) {}

  getProducts() {
    console.log('getProducts');
    return this.httpClinet.get<ProductsResponse>('http://localhost:55811/v1/Product/all', {

    });

  }


  postProducts(product: Products) {
    const wrappedProduct = this.wrapWithData(product);

    return this.httpClinet.post<WrappedProduct>(
      'http://localhost:55811/v1/Product',
      wrappedProduct
    );
  }

  getProductTotal() {
    console.log('getProducts');
    return this.httpClinet.get<ProductsResponse>('http://localhost:55811/v1/Product/total', {
    });
  }


  deleteProducts(id: number) {
    return this.httpClinet.delete<Products>(
      `http://localhost:55811/v1/Product/delete?id=${id}`,

    );
  }

  updateProduct(product: Products) {
    return this.httpClinet.put<Products>(
      `http://localhost:55811/Product/update?id=${product.id}`,
      product,

    );
  }

}
