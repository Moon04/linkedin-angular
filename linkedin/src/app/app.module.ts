import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IntroCardComponent } from "./features/connection-profile/intro-card/intro-card.component";
import { AboutCardComponent } from "./features/connection-profile/about-card/about-card.component";
import { MutualsPastConnectionsService } from "./features/mutuals-past-connections.service";
import { AccountService } from "./features/account.service";
import { HighlightsCardComponent } from "./features/connection-profile/highlights-card/highlights-card.component";
import { MyAccountService } from "./features/my-account.service";
import { BackgroundCardComponent } from './features/connection-profile/background-card/background-card.component';
import { SillsCardComponent } from './features/connection-profile/sills-card/sills-card.component';
import { InterstsCardComponent } from './features/connection-profile/intersts-card/intersts-card.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroCardComponent,
    AboutCardComponent,
    HighlightsCardComponent,
    BackgroundCardComponent,
    SillsCardComponent,
    InterstsCardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],

  providers: [MutualsPastConnectionsService, AccountService, MyAccountService],
  bootstrap: [AppComponent]
})
export class AppModule {}
