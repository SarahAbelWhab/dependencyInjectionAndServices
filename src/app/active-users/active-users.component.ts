import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
@Input() activeUser:string
@Output() SetInactive= new EventEmitter<string>();

SetToInactive(){
  this.SetInactive.emit(this.activeUser);
}

}
