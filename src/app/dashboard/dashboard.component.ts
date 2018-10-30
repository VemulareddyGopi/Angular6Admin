import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { UserService } from '../services';
import { first } from 'rxjs/operators';
import { User } from '../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', './dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: Array<User>;
  searchtext: string;
  pageCount = 5;
  p = 1;
  order = 'Name';
  reverse = false;
  constructor(private orderPipe: OrderPipe, private userService: UserService ) {
   this.orderPipe.transform(this.users, 'Name');
   }

  ngOnInit() {
     this.userService.getAll().subscribe(resp => {
     this.users = resp;
    });
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
