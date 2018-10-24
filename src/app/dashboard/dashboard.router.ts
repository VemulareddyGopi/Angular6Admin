
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


const Dashboard_ROUTE: Routes = [
    {
        path: '',
        component: DashboardComponent
    }
];

export const DashboardRouter = RouterModule.forChild(Dashboard_ROUTE);
