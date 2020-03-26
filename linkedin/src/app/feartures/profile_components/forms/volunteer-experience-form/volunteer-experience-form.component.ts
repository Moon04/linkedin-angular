import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-volunteer-experience-form',
  templateUrl: './volunteer-experience-form.component.html',
  styleUrls: ['./volunteer-experience-form.component.css']
})
export class VolunteerExperienceFormComponent implements OnInit {

  volunteerExperienceForm = new FormGroup({
    organization: new FormControl(''),
    role: new FormControl(''),
    cause: new FormControl(''),
    startYear: new FormControl(''),
    startMonth: new FormControl(''),
    endYear: new FormControl(''),
    endMonth: new FormControl(''),
    description: new FormControl('')
  });

  @Input() currentIndex: number;
  @Input() moodIndex: number;
  mood: string = "Add";

  yearsStart: number[] = [];
  yearsEnd: number[] = [];
  months: string[];

  constructor(public profileService: ProfileService) {
    for (let i = 2020; i >= 1900; i--) {
      this.yearsStart.push(i);      
    }

    for (let i = 2030; i >= 1900; i--) {
      this.yearsEnd.push(i);      
    }

    this.months = [
      'January', 'February', 'March', 'April', 'May',
      'June', 'July', 'August', 'September', 'October',
      'November', 'December'
    ]
   }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.moodIndex !== -1) {
      const i = this.moodIndex;
      this.mood = "Edit"
      this.volunteerExperienceForm.patchValue({
        organization: this.profileService.profiles[this.currentIndex].profileBackground.volunteerExperience[i].organization,
        role: this.profileService.profiles[this.currentIndex].profileBackground.volunteerExperience[i].role,
        cause: this.profileService.profiles[this.currentIndex].profileBackground.volunteerExperience[i].cause,
        startYear: this.profileService.profiles[this.currentIndex].profileBackground.volunteerExperience[i].startYear,
        startMonth: this.profileService.profiles[this.currentIndex].profileBackground.volunteerExperience[i].startMonth,
        endYear: this.profileService.profiles[this.currentIndex].profileBackground.volunteerExperience[i].endYear,
        endMonth: this.profileService.profiles[this.currentIndex].profileBackground.volunteerExperience[i].endMonth,
        description: this.profileService.profiles[this.currentIndex].profileBackground.volunteerExperience[i].description
      });
    }

    else{
      this.mood = "Add";
      this.volunteerExperienceForm.patchValue({
        organization: '',
        role: '',
        cause: '',
        startDate: '',
        endDate: '',
        description: ''
      });
    }
  }

  saveVolunteerExperience(){
    this.profileService.profiles[this.currentIndex].profileBackground.volunteerExperience.push({
      organization: this.profileService.organizations[this.volunteerExperienceForm.value.organization],
      role: this.volunteerExperienceForm.value.role,
      cause: this.volunteerExperienceForm.value.cause,
      startYear: this.volunteerExperienceForm.value.startYear,
      startMonth: this.volunteerExperienceForm.value.startMonth,
      endYear: this.volunteerExperienceForm.value.endYear,
      endMonth: this.volunteerExperienceForm.value.endMonth,
      description: this.volunteerExperienceForm.value.description
    });
    this.profileService.profiles[this.currentIndex].openVolunteerExperienceForm = !this.profileService.profiles[this.currentIndex].openVolunteerExperienceForm;
  }
}
