import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IntroCardComponent } from "./features/connection-profile/intro-card/intro-card.component";
import { AboutCardComponent } from "./features/connection-profile/about-card/about-card.component";
import { MutualsPastConnectionsService } from "./features/mutuals-past-connections.service";
import { AccountService } from "./features/account.service";
import { HighlightsCardComponent } from "./features/connection-profile/highlights-card/highlights-card.component";
import { MyAccountService } from "./features/my-account.service";
import { BackgroundCardComponent } from "./features/connection-profile/background-card/background-card.component";
import { SillsCardComponent } from "./features/connection-profile/sills-card/sills-card.component";
import { InterstsCardComponent } from "./features/connection-profile/intersts-card/intersts-card.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./features/landing-page/landing-page.component";
import { NavlogoComponent } from "./core/navlogo/navlogo.component";
import { LheaderComponent } from "./core/lheader/lheader.component";
import { LoginComponent } from "./core/login/login.component";
import { Regform1Component } from "./features/regform1/regform1.component";
import { Regform2Component } from "./features/regform2/regform2.component";
import { Regform3Component } from "./features/regform3/regform3.component";
import { Regform4Component } from "./features/regform4/regform4.component";
import { Regform5Component } from "./features/regform5/regform5.component";
import { LfooterComponent } from "./core/lfooter/lfooter.component";
import { FootersignComponent } from "./features/regform1/footersign/footersign.component";
import { AddprofilepicComponent } from "./features/addprofilepic/addprofilepic.component";
import { ErrorpageComponent } from "./core/errorpage/errorpage.component";

import { UsersService } from "./_services/users.service";
import { Error } from "./_services/errors";
import { AccountPeakComponent } from "./features/home-page/account-peak/account-peak.component";
import { PostsComponent } from "./features/home-page/posts/posts.component";
import { HomePageComponent } from "./features/home-page/home-page.component";
import { HomeConnectorsComponent } from "./features/home-page/home-connectors/home-connectors.component";
import { HomeConnectorsCardsComponent } from "./features/home-page/home-connectors/home-connectors-cards/home-connectors-cards.component";
import { PostCardsComponent } from "./features/home-page/posts/post-cards/post-cards.component";
import { ProfileComponent } from "./feartures/profile_components/profile/profile.component";
import { InterestsComponent } from "./feartures/profile_components/interests/interests.component";
import { IntroSectionComponent } from "./feartures/profile_components/sections/intro-section/intro-section.component";
import { AboutSectionComponent } from "./feartures/profile_components/sections/about-section/about-section.component";
import { BackgroundSectionComponent } from "./feartures/profile_components/sections/background-section/background-section.component";
import { SkillsSectionComponent } from "./feartures/profile_components/sections/skills-section/skills-section.component";
import { AccomplishmentsSectionComponent } from "./feartures/profile_components/sections/accomplishments-section/accomplishments-section.component";
import { DashboardSectionComponent } from "./feartures/profile_components/sections/dashboard-section/dashboard-section.component";
import { HeaderComponent } from "./core/header/header.component";
import { FooterComponent } from "./core/footer/footer.component";
import { ProfileService } from "./feartures/profile_components/profile.service";
import { EducationFormComponent } from "./feartures/profile_components/forms/education-form/education-form.component";
import { VolunteerExperienceFormComponent } from "./feartures/profile_components/forms/volunteer-experience-form/volunteer-experience-form.component";
import { WorkExperienceFormComponent } from "./feartures/profile_components/forms/work-experience-form/work-experience-form.component";
import { SkillFormComponent } from "./feartures/profile_components/forms/skill-form/skill-form.component";
import { AboutFormComponent } from "./feartures/profile_components/forms/about-form/about-form.component";
import { IntroFormComponent } from "./feartures/profile_components/forms/intro-form/intro-form.component";
import { CourseFormComponent } from "./feartures/profile_components/forms/course-form/course-form.component";
import { ProjectFormComponent } from "./feartures/profile_components/forms/project-form/project-form.component";
import { LanguageFormComponent } from "./feartures/profile_components/forms/language-form/language-form.component";
import { from } from "rxjs";
import { ContactInfoFormComponent } from "./feartures/profile_components/forms/contact-info-form/contact-info-form.component";
import { ConnectionComponent } from "./features/connection-profile/connection/connection.component";
import { ConnectionsPageComponent } from "./features/connection-profile/connections-page/connections-page.component";

@NgModule({
  declarations: [
    AppComponent,
    IntroCardComponent,
    AboutCardComponent,
    HighlightsCardComponent,
    BackgroundCardComponent,
    SillsCardComponent,
    InterstsCardComponent,
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
    ProfileComponent,
    InterestsComponent,
    IntroSectionComponent,
    AboutSectionComponent,
    BackgroundSectionComponent,
    SkillsSectionComponent,
    AccomplishmentsSectionComponent,
    DashboardSectionComponent,
    EducationFormComponent,
    VolunteerExperienceFormComponent,
    WorkExperienceFormComponent,
    SkillFormComponent,
    AboutFormComponent,
    IntroFormComponent,
    CourseFormComponent,
    ProjectFormComponent,
    LanguageFormComponent,
    ContactInfoFormComponent,
    ConnectionComponent,
    ConnectionsPageComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "landing", pathMatch: "full" },
      { path: "landing", component: LandingPageComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: Regform1Component },
      { path: "register2", component: Regform2Component },
      { path: "register3", component: Regform3Component },
      { path: "register4", component: Regform4Component },
      { path: "register5", component: Regform5Component },
      {
        path: "home/connection/certainconnection",
        component: ConnectionComponent
      },
      { path: "home/myprofile", component: ProfileComponent },
      { path: "home/connection", component: ConnectionsPageComponent },
      { path: "home", component: HomePageComponent },
      { path: "**", component: ErrorpageComponent }
    ])
  ],
  providers: [
    MutualsPastConnectionsService,
    AccountService,
    MyAccountService,
    ProfileService,
    UsersService,
    Error
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
