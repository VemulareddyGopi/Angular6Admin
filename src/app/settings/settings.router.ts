
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from '../settings/accounts/accounts.component';
import { ChangepasswordComponent } from '../settings/changepassword/changepassword.component';
import { ProfileComponent } from '../settings/profile/profile.component';


const Settings_ROUTE: Routes = [
    {
        path: '',
        component: AccountsComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'changepassword',
        component: ChangepasswordComponent
    }
];

export const SettingsRouter = RouterModule.forChild(Settings_ROUTE);
