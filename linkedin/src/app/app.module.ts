import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { NavlogoComponent } from './core/navlogo/navlogo.component';
import { LheaderComponent } from './core/lheader/lheader.component';
import { LoginComponent } from './core/login/login.component';
import { Regform1Component } from './features/regform1/regform1.component';
import { Regform2Component } from './features/regform2/regform2.component';
import { Regform3Component } from './features/regform3/regform3.component';
import { Regform4Component } from './features/regform4/regform4.component';
import { Regform5Component } from './features/regform5/regform5.component';
import { LfooterComponent } from './core/lfooter/lfooter.component';
import { FootersignComponent } from './features/regform1/footersign/footersign.component';
import { AddprofilepicComponent } from './features/addprofilepic/addprofilepic.component';
import { ErrorpageComponent } from './core/errorpage/errorpage.component';

import { UsersService } from './_services/users.service';
import { Error } from "./_services/errors";
import { AccountPeakComponent } from './features/home-page/account-peak/account-peak.component';
import { PostsComponent } from './features/home-page/posts/posts.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { HomeConnectorsComponent } from './features/home-page/home-connectors/home-connectors.component';
import { HomeConnectorsCardsComponent } from './features/home-page/home-connectors/home-connectors-cards/home-connectors-cards.component';
import { PostCardsComponent } from './features/home-page/posts/post-cards/post-cards.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavlogoComponent,
    LheaderComponent,
    LoginComponent,
    Regform1Component,
    Regform2Component,
    Regform3Component,
    Regform4Component,
    Regform5Component,
    LfooterComponent,
    FootersignComponent,
    AddprofilepicComponent,
    ErrorpageComponent,
    AccountPeakComponent,
    PostsComponent,
    HomePageComponent,
    HomeConnectorsComponent,
    HomeConnectorsCardsComponent,
    PostCardsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      { path: 'landing', component: LandingPageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: Regform1Component },
      { path: 'register2', component: Regform2Component },
      { path: 'register3', component: Regform3Component },
      { path: 'register4', component: Regform4Component },
      { path: 'register5', component: Regform5Component },
      { path: 'home', component: HomePageComponent},
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
