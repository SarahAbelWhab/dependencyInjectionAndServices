import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers=['Mike','Nikolai', 'Rona','Amir']
  inactiveUsers=['Luna','Mark', 'Kiro','louis']


  SetToInactive(user){
    console.log(this.activeUsers.indexOf(user));
    this.inactiveUsers.push(user);
   this.activeUsers.splice(this.activeUsers.indexOf(user),1);
  }
  SetToActive(user){
    console.log(this.inactiveUsers.indexOf(user));
    this.activeUsers.push(user);
   this.inactiveUsers.splice(this.inactiveUsers.indexOf(user),1);
  }
}
