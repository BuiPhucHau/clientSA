import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserInfor} from "../../models/user-info";
import * as UserActions from "../../ngrx/actions/user.action";
import {Store} from "@ngrx/store";
import {UserInforState} from "../../ngrx/states/user.state";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{


  constructor(private store: Store<{
    user: UserInforState;
  }>, ) {}

  public userForm!: FormGroup;

  ngOnInit(): void {

    this.userForm = new FormGroup({
      //how to set id == randomId
      id: new FormControl(0, [Validators.required]),
      role: new FormControl('user', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      photoURL: new FormControl('', [Validators.required]),
    });

  }

  register(userInfor: UserInfor) {
    console.log(userInfor);
    //call dispatch
    this.store.dispatch(UserActions.createUser({userInfor}));
  }



}
