import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAdmin: boolean = true;
  constructor(private loginService: LoginService, private router: Router) {}
  async login() {
    let loginResult = await this.loginService.loginWithGoogle();
    if (loginResult == null) {
      console.log('Login failed');
      alert('ahihi đồ ngốc');
    } else {
      this.isAdmin = false;
      console.log('Login success');
      this.router.navigate(['/admin']);
    }
  }
}
