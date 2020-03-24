import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { NavlogoComponent } from './core/navlogo/navlogo.component';
import { HeaderComponent } from './core/header/header.component';
import { LoginComponent } from './core/login/login.component';
import { Regform1Component } from './core/regform1/regform1.component';
import { Regform2Component } from './core/regform2/regform2.component';
import { Regform3Component } from './core/regform3/regform3.component';
import { Regform4Component } from './core/regform4/regform4.component';
import { Regform5Component } from './core/regform5/regform5.component';
import { FooterComponent } from './core/footer/footer.component';
import { FootersignComponent } from './core/regform1/footersign/footersign.component';
import { AddprofilepicComponent } from './features/addprofilepic/addprofilepic.component';
import { UsersService } from './_services/users.service';
import { Error } from "./_services/errors";
import { ErrorpageComponent } from './core/errorpage/errorpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    FooterComponent,
    HeaderComponent,
    Regform1Component,
    Regform2Component,
    Regform3Component,
    NavlogoComponent,
    FootersignComponent,
    Regform4Component,
    Regform5Component,
    AddprofilepicComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule
    RouterModule.forRoot([
      // { path: '', component: ListingComponent }, //hia hia elii ba3dihaa
      // { path: '', redirectTo: 'home', pathMatch: 'full' },
      // { path: 'home', component: HomeComponent },
      // { path: '', component: LandingPageComponent },
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      { path: 'landing', component: LandingPageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: Regform1Component },
      { path: 'register2', component: Regform2Component },
      { path: 'register3', component: Regform3Component },
      { path: 'register4', component: Regform4Component },
      { path: 'register5', component: Regform5Component },
      { path: '**', component: ErrorpageComponent }
    ])
  ],
  providers: [
    UsersService,
    Error
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
