import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private counterService :CounterService) { }
  activeUsers=['Mike','Nikolai', 'Rona','Amir']
  inactiveUsers=['Luna','Mark', 'Kiro','louis']


  SetToInactive(user){
    console.log(this.activeUsers.indexOf(user));
    this.inactiveUsers.push(user);
   this.activeUsers.splice(this.activeUsers.indexOf(user),1);
   this.counterService.setToInactiveCount++;

  }
  SetToActive(user){
    console.log(this.inactiveUsers.indexOf(user));
    this.activeUsers.push(user);
   this.inactiveUsers.splice(this.inactiveUsers.indexOf(user),1);
   this.counterService.setToActiveCount++;
  }

}
