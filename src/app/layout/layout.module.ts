import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout.routing';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from "../components/dashboard/dashboard.component";

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule
  ],
  declarations: [
    LayoutComponent,
    DashboardComponent
  ]
})
export class LayoutModule { }
