import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-volunteer-experience-form',
  templateUrl: './volunteer-experience-form.component.html',
  styleUrls: ['./volunteer-experience-form.component.css']
})
export class VolunteerExperienceFormComponent implements OnInit {

  @Input() openVolunteerExperienceForm: boolean;

  volunteerExperienceForm = new FormGroup({
    organization: new FormControl(),
    role: new FormControl(),
    cause: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    description: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

}
