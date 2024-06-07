import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = 'buihau038@gmail.com';
  password: string = 'buihau038';

  constructor(private loginService: LoginService, private router: Router) {}

  async onSubmit() {
    let loginResult = await this.loginService.login(this.email, this.password).toPromise();
    if (loginResult == null) {
      alert('Sai tài khoản hoặc mật khẩu');
    } else {
      console.log('Login success');
      this.router.navigate(['/home']);
    }
  }
}
