import { NgModule } from '@angular/core';

import {
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdListModule
} from '@angular/material';

@NgModule({
  imports: [
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdListModule
  ],
  exports: [
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdListModule
  ]
})
export class MaterialModule {}