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

  @Input() currentIndex;
  @Input() moodIndex: number;
  mood: string = "Add";

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.moodIndex !== -1) {
      const i = this.moodIndex;
      this.mood = "Edit"
      this.volunteerExperienceForm.patchValue({
        organization: this.profileService.profiles[this.currentIndex].profileBackground.volunteerExperience[i].organization,
        role: this.profileService.profiles[this.currentIndex].profileBackground.volunteerExperience[i].role,
        cause: this.profileService.profiles[this.currentIndex].profileBackground.volunteerExperience[i].cause,
        startDate: this.profileService.profiles[this.currentIndex].profileBackground.volunteerExperience[i].startDate,
        endDate: this.profileService.profiles[this.currentIndex].profileBackground.volunteerExperience[i].endDate,
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
      startDate: this.volunteerExperienceForm.value.startDate,
      endDate: this.volunteerExperienceForm.value.endDate,
      description: this.volunteerExperienceForm.value.description
    });
    this.profileService.profiles[this.currentIndex].openVolunteerExperienceForm = !this.profileService.profiles[this.currentIndex].openVolunteerExperienceForm;
  }
}
