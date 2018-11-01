import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouter } from '../dashboard/dashboard.router';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    DashboardRouter,
    SharedModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
