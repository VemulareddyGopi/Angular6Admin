import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts/accounts.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

import { SettingsRouter } from 'src/app/settings/settings.router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SettingsRouter
  ],
  declarations: [AccountsComponent, ProfileComponent, ChangepasswordComponent]
})
export class SettingsModule { }
