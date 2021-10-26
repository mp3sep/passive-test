import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommanModule } from '../comman/comman.module';
// import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CommanModule,
    // HttpClientModule,
    LayoutRoutingModule,
  ]
})
export class LayoutModule { }
