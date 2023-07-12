import { UserService } from './../shared/user.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  @Input() inactiveUser: string
  constructor(private userService: UserService) { }


  SetToActive() {
    this.userService.SetToActive(this.inactiveUser);
  }
}
