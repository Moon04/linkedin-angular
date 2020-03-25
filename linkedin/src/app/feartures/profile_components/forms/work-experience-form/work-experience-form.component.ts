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

  @Input() currentIndex;
  @Input() moodIndex: number;
  mood: string = "Add";


  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.moodIndex !== -1) {
      const i = this.moodIndex;
      this.mood = "Edit"
      this.workExperienceForm.patchValue({
        title: this.profileService.profiles[this.currentIndex].profileBackground.workExperience[i].title,
        employmentType: this.profileService.profiles[this.currentIndex].profileBackground.workExperience[i].employmentType,
        company: this.profileService.profiles[this.currentIndex].profileBackground.workExperience[i].company,
        location: this.profileService.profiles[this.currentIndex].profileBackground.workExperience[i].location,
        startDate: this.profileService.profiles[this.currentIndex].profileBackground.workExperience[i].startDate,
        endDate: this.profileService.profiles[this.currentIndex].profileBackground.workExperience[i].endDate,
        headline: this.profileService.profiles[this.currentIndex].profileBackground.workExperience[i].headline,
        description: this.profileService.profiles[this.currentIndex].profileBackground.workExperience[i].description
      });
    }

    else{
      this.mood = "Add";
      this.workExperienceForm.patchValue({
        title: '',
        employmentType: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        headline: '',
        description: ''
      });
    }
  }

  saveWorkExperience(){
    this.profileService.profiles[this.currentIndex].profileBackground.workExperience.push({
      title: this.workExperienceForm.value.title,
      employmentType: this.workExperienceForm.value.employmentType,
      company: this.profileService.organizations[this.workExperienceForm.value.company],
      location: this.workExperienceForm.value.location,
      startDate: this.workExperienceForm.value.startDate,
      endDate: this.workExperienceForm.value.endDate,
      headline: this.workExperienceForm.value.headline,
      description: this.workExperienceForm.value.description
    });
    this.profileService.profiles[this.currentIndex].openWorkExperienceForm = !this.profileService.profiles[this.currentIndex].openWorkExperienceForm;
  }

}
