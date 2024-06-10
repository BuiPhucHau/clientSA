import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Products, WrappedProduct} from '../models/products.model';

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
    return this.httpClinet.get<Products[]>('http://localhost:56036/v1/Product/all', {

    });

  }

//write a function to post product to server with data{
//  name: string;
//  price: number;
//  imgUrl: string;
//  category: string;
//  description: string;
//  }



 /* postProducts(product: Products) {

    return this.httpClinet.post<Products>(
      'http://localhost:56036/v1/Product',
      product,

    );
  }*/
  postProducts(product: Products) {
    const wrappedProduct = this.wrapWithData(product);

    return this.httpClinet.post<WrappedProduct>(
      'http://localhost:56036/v1/Product',
      wrappedProduct
    );
  }


  deleteProducts(id: number) {
    return this.httpClinet.delete<Products>(
      `http://localhost:3000/sever/delete/${id}`,

    );
  }

  updateProduct(product: Products) {
    return this.httpClinet.put<Products>(
      `http://localhost:3000/sever/update/${product.id}`,
      product,

    );
  }
}
