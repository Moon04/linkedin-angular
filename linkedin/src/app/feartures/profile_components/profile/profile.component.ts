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
   }

  ngOnInit(): void{
    this.organizations = this.profileService.organizations;

    for (let i = 0; i < this.profileService.profiles[1].profileSkills.length; i++) {
      this.skills.push(this.profileService.profiles[1].profileSkills[i]);
    }
  }

  setMoodEducationIndex(index: number){
    this.moodEducationIndex = index;
    this.profileService.profiles[1].openEducationForm = !this.profileService.profiles[1].openEducationForm;
  }

  setMoodWorkIndex(index: number){
    this.moodWorkIndex = index;
    this.profileService.profiles[1].openWorkExperienceForm = !this.profileService.profiles[1].openWorkExperienceForm;
  }

  setMoodVolunteerIndex(index: number){
    this.moodVolunteerIndex = index;
    this.profileService.profiles[1].openVolunteerExperienceForm = !this.profileService.profiles[1].openVolunteerExperienceForm;
  }

  setMoodCourseIndex(index: number){
    this.moodCourseIndex = index;
    this.profileService.profiles[1].openCourseForm = !this.profileService.profiles[1].openCourseForm;
  }

  setMoodProjectIndex(index: number){
    this.moodProjectIndex = index;
    this.profileService.profiles[1].openProjectForm = !this.profileService.profiles[1].openProjectForm;
  }

  setMoodLanguageIndex(index: number){
    this.moodLanguageIndex = index;
    this.profileService.profiles[1].openLanguageForm = !this.profileService.profiles[1].openLanguageForm;
  }



  deleteSkillFromView(skill: ProfileSkills){
    for (let index = 0; index < this.skills.length; index++) {
      if (this.skills[index].id === skill.id) {
          this.skills.splice(index, 1);
      } 
    }
  }

  saveSkills(){
    this.profileService.profiles[1].profileSkills = this.skills;
    this.profileService.profiles[1].openEditSkills = !this.profileService.profiles[1].openEditSkills;
  }

}
