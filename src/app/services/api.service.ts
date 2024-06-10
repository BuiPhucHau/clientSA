import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClinet: HttpClient) {}

  getProducts() {
    console.log('getProducts');
    return this.httpClinet.get<Products[]>('http://localhost:56036/v1/Product/all', {

    });

  }

  postProducts(product: Products) {
    return this.httpClinet.post<Products>(
      'http://localhost:56036/v1/Product',
      product,
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
