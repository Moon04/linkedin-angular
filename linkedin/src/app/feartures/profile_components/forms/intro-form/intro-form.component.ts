import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-intro-form',
  templateUrl: './intro-form.component.html',
  styleUrls: ['./intro-form.component.css']
})
export class IntroFormComponent implements OnInit {

  @Input() currentIndex: number;

  introForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    headline: new FormControl(''),
    education: new FormControl(''),
    country: new FormControl(''),
    location: new FormControl(''),
    industry: new FormControl('')
  });

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
    this.introForm.patchValue({
      firstName: this.profileService.profiles[this.currentIndex].profileIntro.basicInfo.firstName,
      lastName: this.profileService.profiles[this.currentIndex].profileIntro.basicInfo.lastName,
      headline: this.profileService.profiles[this.currentIndex].profileIntro.basicInfo.recentJob,
      // education: this.profileService.profiles[this.currentIndex].profileIntro.basicInfo.college,
      country: this.profileService.profiles[this.currentIndex].profileIntro.country,
      location: this.profileService.profiles[this.currentIndex].profileIntro.basicInfo.location,
      industry: this.profileService.profiles[this.currentIndex].profileIntro.industry
    });
  }

  saveIntro(){
    this.profileService.profiles[this.currentIndex].profileIntro.basicInfo.firstName = this.introForm.value.firstName;
    this.profileService.profiles[this.currentIndex].profileIntro.basicInfo.lastName = this.introForm.value.lastName;
    this.profileService.profiles[this.currentIndex].profileIntro.basicInfo.recentJob = this.introForm.value.headline;
    this.profileService.profiles[this.currentIndex].profileIntro.education.title = this.introForm.value.education;
    this.profileService.profiles[this.currentIndex].profileIntro.country = this.introForm.value.country;
    this.profileService.profiles[this.currentIndex].profileIntro.basicInfo.location = this.introForm.value.location;
    this.profileService.profiles[this.currentIndex].profileIntro.industry = this.introForm.value.industry;
    this.profileService.profiles[this.currentIndex].openIntroForm = !this.profileService.profiles[this.currentIndex].openIntroForm;
  }

}
