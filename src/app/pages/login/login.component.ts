import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
      this.authenticationService.logout();
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username.trim(), this.model.password.trim())
        .subscribe(
            data => {
                if(data['error']){
                  this.alertService.error(data['error']['text']);
                  this.loading = false;
                } else {
                  this.router.navigate([this.returnUrl]);
                }
            },
            error => {
                this.loading = false;
                this.alertService.error("Something went wrong. Please try it again.");
            });
  }

}
