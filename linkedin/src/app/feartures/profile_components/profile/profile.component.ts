import { Component, OnInit } from '@angular/core';

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

  currentId: number;
  currentIndex: number;
  
  constructor(public profileService: ProfileService) {
    this.currentId = Number(JSON.parse(localStorage.getItem("currentUser")));
    for (let i = 0; i < profileService.profiles.length; i++) {
        if (profileService.profiles[i].id == this.currentId) {
          this.currentIndex = i;
        } 
    }
    console.log(this.currentId);
    console.log(this.currentIndex);
    console.log(profileService.profiles);
    
   }

  ngOnInit(): void{
    this.organizations = this.profileService.organizations;

   if(this.profileService.profiles[this.currentIndex].profileSkills){
    for (let i = 0; i < this.profileService.profiles[this.currentIndex].profileSkills.length; i++) 
    {
      this.skills.push(this.profileService.profiles[this.currentIndex].profileSkills[i]);
    }
   }
  }

  setMoodEducationIndex(index: number){
    this.moodEducationIndex = index;
    this.profileService.profiles[this.currentIndex].openEducationForm = !this.profileService.profiles[this.currentIndex].openEducationForm;
  }

  setMoodWorkIndex(index: number){
    this.moodWorkIndex = index;
    this.profileService.profiles[this.currentIndex].openWorkExperienceForm = !this.profileService.profiles[this.currentIndex].openWorkExperienceForm;
  }

  setMoodVolunteerIndex(index: number){
    this.moodVolunteerIndex = index;
    this.profileService.profiles[this.currentIndex].openVolunteerExperienceForm = !this.profileService.profiles[this.currentIndex].openVolunteerExperienceForm;
  }

  setMoodCourseIndex(index: number){
    this.moodCourseIndex = index;
    this.profileService.profiles[this.currentIndex].openCourseForm = !this.profileService.profiles[this.currentIndex].openCourseForm;
  }

  setMoodProjectIndex(index: number){
    this.moodProjectIndex = index;
    this.profileService.profiles[this.currentIndex].openProjectForm = !this.profileService.profiles[this.currentIndex].openProjectForm;
  }

  setMoodLanguageIndex(index: number){
    this.moodLanguageIndex = index;
    this.profileService.profiles[this.currentIndex].openLanguageForm = !this.profileService.profiles[this.currentIndex].openLanguageForm;
  }

  deleteSkillFromView(skill: ProfileSkills){
    for (let index = 0; index < this.skills.length; index++) {
      if (this.skills[index].id === skill.id) {
          this.skills.splice(index, 1);
      } 
    }
  }

  saveSkills(){
    this.profileService.profiles[this.currentIndex].profileSkills = this.skills;
    this.profileService.profiles[this.currentIndex].openEditSkills = !this.profileService.profiles[this.currentIndex].openEditSkills;
  }

}
