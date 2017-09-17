import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { CookieService } from 'ngx-cookie-service';

import sha from 'sha.js';

@Injectable()
export class AuthenticationService {
    urlApi = '';

    constructor(private http: Http, private cookieService: CookieService) { }

    login(username: string, password: string) {
        return this.http.post(this.urlApi+'login', JSON.stringify({ username: username, passcode: this.mahoaSha256(password) }))
            .map((response: Response) => {
                let user = response.json();
                if (user['userData'] && user['userData']['username'] && user['userData']['loginkey']) {
                    this.cookieService.set('_signedin', '1');
                    this.cookieService.delete('_tokenkey');
                    this.cookieService.set('_tokenkey', user['userData']['loginkey'].trim());
                    this.cookieService.delete('_ukey');
                    this.cookieService.set('_ukey', user['userData']['ukey'].trim());
                }
                return user;
            });
    }

    logout() {
        this.cookieService.delete('_signedin');
        this.cookieService.delete('_tokenkey');
        this.cookieService.delete('_ukey');
    }

    mahoaSha256(string): string{
        return sha("sha256").update(string, 'utf8').digest('hex');
    }
}