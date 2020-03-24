import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Organization } from 'src/app/_model/organization';
import { ProfileService } from './../profile.service';
import { Profile } from 'src/app/_model/profile';
import { ProfileSkills } from 'src/app/_model/profileSkills';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  organizations: Organization[];
  skills: ProfileSkills[] = [];

  moodEducationIndex: number = -1;
  moodWorkIndex: number = -1;
  moodVolunteerIndex: number = -1;
  moodCourseIndex: number = -1;
  moodProjectIndex: number = -1;
  moodLanguageIndex: number = -1;
  
  constructor(public profileService: ProfileService) { }

  ngOnInit(): void{
    this.organizations = this.profileService.organizations;

    for (let i = 0; i < this.profileService.skills.length; i++) {
      this.skills.push(this.profileService.skills[i]);
    }
    
    this.profile = {
      id: "1",
      profileIntro: this.profileService.intro,
      profileAbout: this.profileService.about,
      profileDashboard: this.profileService.dashboard,
      profileBackground: this.profileService.background,
      profileSkills: this.profileService.skills,
      profileAccomplishments: this.profileService.accomplishments,
      profileInterests: this.profileService.interests
    }
  }

  setMoodEducationIndex(index: number){
    this.moodEducationIndex = index;
    this.profileService.openEducationForm = !this.profileService.openEducationForm;
  }

  setMoodWorkIndex(index: number){
    this.moodWorkIndex = index;
    this.profileService.openWorkExperienceForm = !this.profileService.openWorkExperienceForm;
  }

  setMoodVolunteerIndex(index: number){
    this.moodVolunteerIndex = index;
    this.profileService.openVolunteerExperienceForm = !this.profileService.openVolunteerExperienceForm;
  }

  setMoodCourseIndex(index: number){
    this.moodCourseIndex = index;
    this.profileService.openCourseForm = !this.profileService.openCourseForm;
  }

  setMoodProjectIndex(index: number){
    this.moodProjectIndex = index;
    this.profileService.openProjectForm = !this.profileService.openProjectForm;
  }

  setMoodLanguageIndex(index: number){
    this.moodLanguageIndex = index;
    this.profileService.openLanguageForm = !this.profileService.openLanguageForm;
  }



  deleteSkillFromView(skill: ProfileSkills){
    for (let index = 0; index < this.skills.length; index++) {
      if (this.skills[index].id === skill.id) {
          this.skills.splice(index, 1);
      } 
    }
  }

  saveSkills(){
    this.profileService.skills = this.skills;
    this.profileService.openEditSkills = !this.profileService.openEditSkills;
  }

}
