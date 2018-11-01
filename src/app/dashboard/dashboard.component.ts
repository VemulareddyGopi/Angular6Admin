import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import { UserService } from '../services';
import { first } from 'rxjs/operators';
import { User } from '../models';
import { trigger, state, style, animate, transition, group } from '@angular/animations';
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', './dashboard.component.scss'],
  animations: [
    // DEFAULT STATES
    trigger('enterLeave', [
      // :ENTER TRANSITION
      // Transition Styles
      transition('void => *', [
        // 'From' styles
        style({
          opacity: 0.2,
          transform: 'translateX(-100vw)'
        }),
        animate('500ms ease-in',
          // 'To' styles
          // 1 - Comment this to remove the item's grow...
          style({
            opacity: 1,
            transform: 'scale(1.2)'
          })
        )
      ]),
    ]),
    trigger('selected', [
      state('selected',
        style({
          backgroundColor: 'whitesmoke',
          transform: 'scale(1.2)',
        })
      ),
      // 3 - Comment this and Uncomment GROUPED ANIMATIONS to see them in action.
      transition('selected <=> *', [
        animate('300ms ease-in')
      ]),
    ])
    // ANIMATION CALLBACKS
  ]
})
export class DashboardComponent implements OnInit {
  isShow:boolean;
  users: User[];
  searchtext: string;
  pageCount = 5;
  page = 1;
  order = 'Name';
   reverse = false;
   model: User;
  constructor(private orderPipe: OrderPipe, private userService: UserService,
  private confirmationDialogService: ConfirmationDialogService) {
    this.orderPipe.transform(this.users, 'Name');
    this.model = new User();
  }

  ngOnInit() {
   // this.isShow=true
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
   
  addUser(){
    this.model=new User;
    this.isShow = !this.isShow
  }
  addCancel(){
    this.isShow = !this.isShow
    this.model=new User;
  }
  editUser(user){
    debugger;
    this.isShow = !this.isShow
    this.model=user
  }
  deleteUser(user){
this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
    .then((confirmed) => console.log('User confirmed:', confirmed))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  
  }
  onSubmit(){
     this.isShow = !this.isShow
     debugger
     console.log(JSON.stringify(this.model));
  }

}
