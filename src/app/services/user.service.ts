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
  userInfor: BehaviorSubject<UserInfor | null>;

  constructor(
    private auth: Auth,
    private http: HttpClient,
    private store: Store
  ) {
    this.userInfor = new BehaviorSubject<UserInfor | null>(null);

    onAuthStateChanged(
      this.auth,
      async (user) => {
        if (user) {
          this.updateUserInfor({
            id: user.uid,
            name: user.displayName || 'No name',
            email: user.email || 'No email',
            avatarUrl: user.photoURL || '',
          });
          let idToken = await user.getIdToken(true);
          this.store.dispatch(ProductsActions.setIdToken({ idToken }));
          this.sendMessage(idToken);
        } else {
          this.clearUserInfor();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sendMessage(idToken: string) {
    this.http
      .get('http://localhost:3000', {
        headers: new HttpHeaders({
          Authorization: ` ${idToken}`,
        }),
      })
      .subscribe((res) => {
        console.log(res);
      });
  }

  async logout() {
    await signOut(this.auth);
    this.clearUserInfor();
  }

  updateUserInfor(user: UserInfor) {
    this.userInfor.next(user);
  }

  clearUserInfor() {
    this.userInfor.next(null);
  }
}
