import { Component, Input } from '@angular/core';
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
  userName: string | null = null;

  constructor(
    private router: Router,
    public userService: UserService
  ) {
    this.userService.userInfor.subscribe((userInfor) => {
      if (userInfor) {
        this.isAdmin = true;
        this.userName = userInfor.name;
      } else {
        this.isAdmin = false;
        this.userName = null;
      }
    });
  }

  login() {
    this.router.navigate(['/home/login']);
  }

  @Input() userInfor: UserInfor | null = {
    id: 'id-001',
    name: 'John Doe',
    email: 'mapngu@gmail.com',
    avatarUrl:
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  };
}
