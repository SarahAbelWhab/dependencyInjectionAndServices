import { UserService } from './../shared/user.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  activeUsers
  constructor(public userService: UserService) { }
  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
  }

  SetToInactive(activeUser) {
    this.userService.SetToInactive(activeUser)
  }

}
