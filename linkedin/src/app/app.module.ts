import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
import { ProfileService } from './feartures/profile_components/profile.service';
import { EducationFormComponent } from './feartures/profile_components/forms/education-form/education-form.component';
import { VolunteerExperienceFormComponent } from './feartures/profile_components/forms/volunteer-experience-form/volunteer-experience-form.component';
import { WorkExperienceFormComponent } from './feartures/profile_components/forms/work-experience-form/work-experience-form.component';
import { SkillFormComponent } from './feartures/profile_components/forms/skill-form/skill-form.component';
import { AboutFormComponent } from './feartures/profile_components/forms/about-form/about-form.component';
import { IntroFormComponent } from './feartures/profile_components/forms/intro-form/intro-form.component';
import { CourseFormComponent } from './feartures/profile_components/forms/course-form/course-form.component';
import { ProjectFormComponent } from './feartures/profile_components/forms/project-form/project-form.component';
import { LanguageFormComponent } from './feartures/profile_components/forms/language-form/language-form.component';
import { from } from 'rxjs';


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
    FooterComponent,
    EducationFormComponent,
    VolunteerExperienceFormComponent,
    WorkExperienceFormComponent,
    SkillFormComponent,
    AboutFormComponent,
    IntroFormComponent,
    CourseFormComponent,
    ProjectFormComponent,
    LanguageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
