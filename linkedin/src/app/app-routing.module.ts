import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from "./features/landing-page/landing-page.component";
import { LoginComponent } from "./core/login/login.component";

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
