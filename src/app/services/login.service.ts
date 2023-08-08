import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private auth: Auth, private userService: UserService) {}

  async loginWithGoogle() {
    let provider = new GoogleAuthProvider();
    try {
      let credential = await signInWithPopup(this.auth, provider);
      return credential;
    } catch (error) {
      console.log(error);
      alert('ahihi đồ ngốc');
    }
    return null;
  }
}
