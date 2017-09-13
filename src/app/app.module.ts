import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { RoutingModule } from "./app.routing";

// Language Translate
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function appTranslates(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (appTranslates),
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(appTranslate: TranslateService){
    appTranslate.setDefaultLang("vi");
  }
}
