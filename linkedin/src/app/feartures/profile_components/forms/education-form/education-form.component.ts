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

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

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
