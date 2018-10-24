import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent, HeaderComponent, FooterComponent } from '../shared';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  providers: [],
  exports: [CommonModule,
        FormsModule,
        RouterModule,
        LayoutComponent,
        HttpClientModule,
        FooterComponent,
        HeaderComponent,
        NgxPaginationModule,
        Ng2SearchPipeModule,
        OrderModule]
})
export class SharedModule { }
