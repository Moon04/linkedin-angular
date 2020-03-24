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
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    description: new FormControl('')
  });

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

  saveVolunteerExperience(){
    this.profileService.background.volunteerExperience.push({
      organization: this.profileService.organizations[this.volunteerExperienceForm.value.organization],
      role: this.volunteerExperienceForm.value.role,
      cause: this.volunteerExperienceForm.value.cause,
      startDate: this.volunteerExperienceForm.value.startDate,
      endDate: this.volunteerExperienceForm.value.endDate,
      description: this.volunteerExperienceForm.value.description
    });
    this.profileService.openVolunteerExperienceForm = !this.profileService.openVolunteerExperienceForm;
  }
}
