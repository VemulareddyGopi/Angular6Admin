import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', './dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: any[] = [
    { id: 1, name: 'John', age: 10 }, { id: 2, name: 'Jane', age: 15  }, { id: 3, name: 'Mario', age: 13  },
    { id: 4, name: 'John' , age: 12 }, { id: 5, name: 'Jane' , age: 20 }, {id: 6, name: 'Mario', age: 11  }];
  userFilter: '';
  pageCount = 5;
  p = 1;
  order = 'name';
  reverse = false;
  constructor(private orderPipe: OrderPipe) {
   this.orderPipe.transform(this.users, 'name');
   }

  ngOnInit() {
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
