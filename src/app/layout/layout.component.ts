import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { MdSidenav } from "@angular/material";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;
  bodyWidth = '';
  isShowSidebar:boolean = false;
  navMode = 'side';

  constructor(ngZone:NgZone) { 
    window.onresize = (e) => {
        ngZone.run(() => {
          this.checkIsShowSidebar();
        });
    };
  }

  ngOnInit() {
    this.checkIsShowSidebar();
  }

  checkIsShowSidebar(){
    if (window.innerWidth > 992) {
      this.navMode = 'side';
      this.sidenav.open();
      this.isShowSidebar = true;
    }else{
      this.navMode = 'over';
      this.sidenav.close();
      this.isShowSidebar = false;
    }
  }

}
