import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from "../../node_modules/@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { AccountPeakComponent } from "./home-page/account-peak/account-peak.component";
import { HomeConnectorsComponent } from "./home-page/home-connectors/home-connectors.component";
import { HomeConnectorsCardsComponent } from "./home-page/home-connectors/home-connectors-cards/home-connectors-cards.component";
import { PostsComponent } from "./home-page/posts/posts.component";
import { TagsComponent } from "./home-page/tags/tags.component";
import { PostCardsComponent } from "./home-page/posts/post-cards/post-cards.component";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AccountPeakComponent,
    HomeConnectorsComponent,
    HomeConnectorsCardsComponent,
    PostsComponent,
    TagsComponent,
    PostCardsComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
