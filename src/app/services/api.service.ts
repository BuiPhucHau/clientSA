import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClinet: HttpClient) {}

  getProducts() {
    return this.httpClinet.get<Products[]>('http://localhost:3000/sever');
  }

  postProducts(product: Products) {
    return this.httpClinet.post<Products>(
      'http://localhost:3000/sever',
      product
    );
  }
}
