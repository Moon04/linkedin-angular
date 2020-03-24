import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-work-experience-form',
  templateUrl: './work-experience-form.component.html',
  styleUrls: ['./work-experience-form.component.css']
})
export class WorkExperienceFormComponent implements OnInit {

  workExperienceForm = new FormGroup({
    title: new FormControl(''),
    employmentType: new FormControl(''),
    company: new FormControl(''),
    location: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    headline: new FormControl(''),
    description: new FormControl('')
  });

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

  saveWorkExperience(){
    this.profileService.background.workExperience.push({
      title: this.workExperienceForm.value.title,
      employmentType: this.workExperienceForm.value.employmentType,
      company: this.profileService.organizations[this.workExperienceForm.value.company],
      location: this.workExperienceForm.value.location,
      startDate: this.workExperienceForm.value.startDate,
      endDate: this.workExperienceForm.value.endDate,
      headline: this.workExperienceForm.value.headline,
      description: this.workExperienceForm.value.description
    });
    this.profileService.openWorkExperienceForm = !this.profileService.openWorkExperienceForm;
  }

}
