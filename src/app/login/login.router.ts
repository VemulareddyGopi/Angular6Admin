
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';


const Login_ROUTE: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const LoginRouter = RouterModule.forChild(Login_ROUTE);
