import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClinet: HttpClient) {}

  getProducts(idToken: string) {
    // return this.httpClinet.get<Products[]>('http://localhost:3000/sever');
    return this.httpClinet.get<Products[]>('http://localhost:3000/sever', {
      headers: new HttpHeaders({
        Authorization: ` ${idToken}`,
      }),
    });
  }

  postProducts(product: Products, idToken: string) {
    return this.httpClinet.post<Products>(
      'http://localhost:3000/sever/post',
      product,
      {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        }),
      }
    );
  }

  deleteProducts(id: string, idToken: string) {
    return this.httpClinet.delete<Products>(
      `http://localhost:3000/sever/delete/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        }),
      }
    );
  }

  updateProduct(product: Products, idToken: string) {
    return this.httpClinet.put<Products>(
      `http://localhost:3000/sever/update/${product._id}`,
      product,
      {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        }),
      }
    );
  }
}
