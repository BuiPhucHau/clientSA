import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { UserService } from './user.service';
import { UserInfor } from '../models/user-info';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private fakeUser: UserInfor = {
    id: 'id-001',
    name: 'Bùi Hậu',
    email: 'buihau038@gmail.com',
    avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  };
  
  constructor(private auth: Auth, private userService: UserService) {}

  // async loginWithGoogle() {
  //   let provider = new GoogleAuthProvider();
  //   try {
  //     let credential = await signInWithPopup(this.auth, provider);
  //     return credential;
  //   } catch (error) {
  //     console.log(error);
  //     alert('ahihi đồ ngốc');
  //   }
  //   return null;
  // }

  login(email: string, password: string) {
    if (email === 'buihau038@gmail.com' && password === 'buihau038') {
      this.userService.updateUserInfor(this.fakeUser);
      return of(this.fakeUser);
    } else {
      return of(null);
    }
  }
} 
