import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnInit {

  educationForm = new FormGroup({
    school: new FormControl(''),
    degree: new FormControl(''),
    fieldOfStudy: new FormControl(''),
    startYear: new FormControl(''),
    endYear: new FormControl(''),
    grade: new FormControl(''),
    activities: new FormControl(''),
    description: new FormControl('')
  });

  @Input() moodIndex: number;
  mood: string = "Add";

  years: number[] = [];
  constructor(public profileService: ProfileService) { 
    for (let i = 2020; i >= 1900; i--) {
      this.years.push(i);      
    }
  }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.moodIndex !== -1) {
      const i = this.moodIndex;
      this.mood = "Edit"
      this.educationForm.patchValue({
        school: this.profileService.background.education[i].school,
        degree: this.profileService.background.education[i].degree,
        fieldOfStudy: this.profileService.background.education[i].fieldOfStudy,
        startYear: this.profileService.background.education[i].startYear,
        endYear: this.profileService.background.education[i].endYear,
        grade: this.profileService.background.education[i].grade,
        activities: this.profileService.background.education[i].activities,
        description: this.profileService.background.education[i].description 
      });
    }

    else{
      this.mood = "Add";
      this.educationForm.patchValue({
        school: '',
        degree: '',
        fieldOfStudy: '',
        startYear: '',
        endYear: '',
        grade: '',
        activities: '',
        description:  ''
      });
    }
  }

  saveEducation(){
    this.profileService.background.education.push({
      school: this.profileService.organizations[this.educationForm.value.school],
      degree: this.educationForm.value.degree,
      fieldOfStudy: this.educationForm.value.fieldOfStudy,
      startYear: this.educationForm.value.startYear,
      endYear: this.educationForm.value.endYear,
      grade: this.educationForm.value.grade,
      activities: this.educationForm.value.activities,
      description: this.educationForm.value.description
    });
    this.profileService.openEducationForm = !this.profileService.openEducationForm;
  }
}
