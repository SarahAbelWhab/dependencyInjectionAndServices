import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
@Input() inactiveUser:string
@Output() SetActive = new EventEmitter<string>()

SetToActive(){
  this.SetActive.emit(this.inactiveUser)
}
}
