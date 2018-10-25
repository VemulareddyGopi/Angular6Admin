import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRouter } from '../login/login.router';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationService } from '../services';

@NgModule({
  imports: [
    CommonModule,
    LoginRouter,
    SharedModule
  ],
  //  providers: [AuthenticationService],
  declarations: [LoginComponent]
})
export class LoginModule { }
