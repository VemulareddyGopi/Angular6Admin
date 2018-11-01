import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent, HeaderComponent, FooterComponent } from '../shared';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import {HttpModule} from '@angular/http';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmationDialogService } from '../shared/confirmation-dialog/confirmation-dialog.service';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent,ConfirmationDialogComponent],
  providers: [ConfirmationDialogService],
  entryComponents: [ ConfirmationDialogComponent ],
  exports: [CommonModule,
        FormsModule,
        RouterModule,
        LayoutComponent,
        FooterComponent,
        HeaderComponent,
        NgxPaginationModule,
        Ng2SearchPipeModule,
        OrderModule,
        HttpModule,
        ConfirmationDialogComponent]
})
export class SharedModule { }
