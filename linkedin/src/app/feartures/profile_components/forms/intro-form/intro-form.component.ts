import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-intro-form',
  templateUrl: './intro-form.component.html',
  styleUrls: ['./intro-form.component.css']
})
export class IntroFormComponent implements OnInit {

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
      firstName: this.profileService.intro.firstName,
      lastName: this.profileService.intro.lastName,
      headline: this.profileService.intro.headline,
      education: this.profileService.intro.education.title,
      country: this.profileService.intro.country,
      location: this.profileService.intro.location,
      industry: this.profileService.intro.industry
    });
  }

  saveIntro(){
    this.profileService.intro.firstName = this.introForm.value.firstName;
    this.profileService.intro.lastName = this.introForm.value.lastName;
    this.profileService.intro.headline = this.introForm.value.headline;
    this.profileService.intro.education.title = this.introForm.value.education;
    this.profileService.intro.country = this.introForm.value.country;
    this.profileService.intro.location = this.introForm.value.location;
    this.profileService.intro.industry = this.introForm.value.industry;
    this.profileService.openIntroForm = !this.profileService.openIntroForm;
  }

}
