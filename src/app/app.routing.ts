import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';

const appRoutes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule' },    
    { path: 'login', component: LoginComponent },
    { path: '**', component: Error404Component },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule { }