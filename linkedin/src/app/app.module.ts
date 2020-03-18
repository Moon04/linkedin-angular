import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './feartures/profile_components/profile/profile.component';
import { InterestsComponent } from './feartures/profile_components/interests/interests.component';
import { IntroSectionComponent } from './feartures/profile_components/sections/intro-section/intro-section.component';
import { AboutSectionComponent } from './feartures/profile_components/sections/about-section/about-section.component';
import { BackgroundSectionComponent } from './feartures/profile_components/sections/background-section/background-section.component';
import { SkillsSectionComponent } from './feartures/profile_components/sections/skills-section/skills-section.component';
import { AccomplishmentsSectionComponent } from './feartures/profile_components/sections/accomplishments-section/accomplishments-section.component';
import { DashboardSectionComponent } from './feartures/profile_components/sections/dashboard-section/dashboard-section.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    InterestsComponent,
    IntroSectionComponent,
    AboutSectionComponent,
    BackgroundSectionComponent,
    SkillsSectionComponent,
    AccomplishmentsSectionComponent,
    DashboardSectionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
