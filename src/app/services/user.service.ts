import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, signOut } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { UserInfor } from '../models/user-info';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as ProductsActions from '../ngrx/actions/products.actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class UserService {



}
