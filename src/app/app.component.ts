import { CounterService } from './shared/counter.service';
import { UserService } from './shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit {
  

  constructor(public counterService :CounterService) {
  }
  ngOnInit(): void {

  }
  
}
