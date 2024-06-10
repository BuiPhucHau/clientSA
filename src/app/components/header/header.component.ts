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

  }

  login() {
    this.router.navigate(['/home/login']);
  }

 //get user info when login

}
