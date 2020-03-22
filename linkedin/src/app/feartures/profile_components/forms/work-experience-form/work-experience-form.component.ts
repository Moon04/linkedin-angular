import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-work-experience-form',
  templateUrl: './work-experience-form.component.html',
  styleUrls: ['./work-experience-form.component.css']
})
export class WorkExperienceFormComponent implements OnInit {

  @Input() openWorkExperienceForm: boolean;

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

  constructor() { }

  ngOnInit(): void {
  }

}
