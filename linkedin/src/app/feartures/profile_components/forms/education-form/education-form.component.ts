import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnInit {

  @Input() openEducationForm: boolean;

  educationForm = new FormGroup({
    school: new FormControl(''),
    degree: new FormControl(''),
    fieldOfStudy: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    grade: new FormControl(''),
    activities: new FormControl(''),
    description: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
