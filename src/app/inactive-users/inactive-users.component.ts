import { UserService } from './../shared/user.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers
  constructor(public userService: UserService) { }
  ngOnInit() {

    this.inactiveUsers = this.userService.inactiveUsers
  }

  SetToActive(inactiveUser) {
    this.userService.SetToActive(inactiveUser);
  }
}
