import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout.routing';
import { MaterialModule } from '../material.module';

import { LayoutComponent } from './layout.component';
import { LayoutheaderComponent } from './layoutheader/layoutheader.component';

import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    TranslateModule
  ],
  declarations: [
    LayoutComponent,
    DashboardComponent,
    LayoutheaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
