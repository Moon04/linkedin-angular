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
    currentlyWorking: new FormControl(''),
    startYear: new FormControl(''),
    endYear: new FormControl(''),
    grade: new FormControl(''),
    activities: new FormControl(''),
    description: new FormControl('')
  });


  @Input() currentIndex: number;
  @Input() moodIndex: number;
  mood: string = "Add";

  yearsStart: number[] = [];
  yearsEnd: number[] = []; 

  constructor(public profileService: ProfileService) { 
    for (let i = 2020; i >= 1900; i--) {
      this.yearsStart.push(i);      
    }

    for (let i = 2030; i >= 1900; i--) {
      this.yearsEnd.push(i);      
    }
  }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.moodIndex !== -1) {
      const i = this.moodIndex;
      this.mood = "Edit"
      this.educationForm.patchValue({
        school: this.profileService.profiles[this.currentIndex].profileBackground.education[i].school,
        degree: this.profileService.profiles[this.currentIndex].profileBackground.education[i].degree,
        fieldOfStudy: this.profileService.profiles[this.currentIndex].profileBackground.education[i].fieldOfStudy,
        startYear: this.profileService.profiles[this.currentIndex].profileBackground.education[i].startYear,
        endYear: this.profileService.profiles[this.currentIndex].profileBackground.education[i].endYear,
        grade: this.profileService.profiles[this.currentIndex].profileBackground.education[i].grade,
        activities: this.profileService.profiles[this.currentIndex].profileBackground.education[i].activities,
        description: this.profileService.profiles[this.currentIndex].profileBackground.education[i].description 
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
    this.profileService.profiles[this.currentIndex].profileBackground.education.push({
      school: this.profileService.organizations[this.educationForm.value.school],
      degree: this.educationForm.value.degree,
      fieldOfStudy: this.educationForm.value.fieldOfStudy,
      startYear: this.educationForm.value.startYear,
      endYear: this.educationForm.value.endYear,
      grade: this.educationForm.value.grade,
      activities: this.educationForm.value.activities,
      description: this.educationForm.value.description
    });
    this.profileService.profiles[this.currentIndex].openEducationForm = !this.profileService.profiles[this.currentIndex].openEducationForm;
  }
}
