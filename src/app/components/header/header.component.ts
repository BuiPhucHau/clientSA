import { Component, Input } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { UserInfor } from 'src/app/models/user-info';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAdmin: boolean = false;
  constructor(
    private loginService: LoginService,
    private router: Router,
    public userService: UserService
  ) {
    this.userService.userInfor.subscribe((userInfor) => {
      if (userInfor) {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });
  }
  async login() {
    let loginResult = await this.loginService.loginWithGoogle();
    if (loginResult == null) {
      console.log('Login failed');
    } else {
      console.log('Login success');
      this.router.navigate(['/admin']);
    }
  }

  @Input() userInfor: UserInfor | null = {
    id: 'id-001',
    name: 'John Doe',
    email: 'mapngu@gmail.com',
    avatarUrl:
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  };
}
