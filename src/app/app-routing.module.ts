import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './guards';

const routes: Routes = [
  {
        path: '',
        loadChildren: '../app/login/login.module#LoginModule'
    },
    {
        path: 'dashboard',
        loadChildren: '../app/dashboard/dashboard.module#DashboardModule',
         canActivate: [AuthGuard]
    },
     {
        path: 'settings',
        loadChildren: '../app/settings/settings.module#SettingsModule',
        // canActivate: [AuthGuard]
    }, // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
