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

  @Input() moodIndex: number;
  mood: string = "Add";


  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.moodIndex !== -1) {
      const i = this.moodIndex;
      this.mood = "Edit"
      this.workExperienceForm.patchValue({
        title: this.profileService.background.workExperience[i].title,
        employmentType: this.profileService.background.workExperience[i].employmentType,
        company: this.profileService.background.workExperience[i].company,
        location: this.profileService.background.workExperience[i].location,
        startDate: this.profileService.background.workExperience[i].startDate,
        endDate: this.profileService.background.workExperience[i].endDate,
        headline: this.profileService.background.workExperience[i].headline,
        description: this.profileService.background.workExperience[i].description
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
