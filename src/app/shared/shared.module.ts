import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent, HeaderComponent, FooterComponent } from '../shared';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import {HttpModule} from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    HttpModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  providers: [],
  exports: [CommonModule,
        FormsModule,
        RouterModule,
        LayoutComponent,
        FooterComponent,
        HeaderComponent,
        NgxPaginationModule,
        Ng2SearchPipeModule,
        OrderModule,
        HttpModule]
})
export class SharedModule { }
