import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserInfor } from '../models/user-info';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as ProductsActions from '../ngrx/actions/products.actions';
import { Store } from '@ngrx/store';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  private wrapWithData<T>(obj: T): { data: T } {
    return { data: obj };
  }
  constructor(private httpClinet: HttpClient) {}


  createUser(user: UserInfor) {
    const wrappedUser = this.wrapWithData(user);

    return this.httpClinet.post<UserInfor>(
      'http://localhost:55811/v1/User',
      wrappedUser
    );
  }

}
