import { Injectable } from '@angular/core';
import { Auth, onAuthStateChanged, signOut } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { UserInfor } from '../models/user-info';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfor: BehaviorSubject<UserInfor | null>;
  constructor(private auth: Auth, private http: HttpClient) {
    this.userInfor = new BehaviorSubject<UserInfor | null>({
      id: 'id-001',
      name: 'John Doe',
      email: 'test@gmail.com',
      avatarUrl:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    } as UserInfor);
    onAuthStateChanged(
      this.auth,
      async (user) => {
        console.log(user);
        if (user) {
          this.userInfor.next({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            avatarUrl: user.photoURL,
          } as UserInfor);
          let idToken = await user!.getIdToken(true);
          console.log(idToken);
          this.sendMessage(idToken);
        } else {
          this.userInfor.next(null);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sendMessage(idToken: string) {
    console.log(idToken);
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
  }
}
