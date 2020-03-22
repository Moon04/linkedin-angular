import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  @Input() openProjectForm: boolean;

  projectForm = new FormGroup({
    projectName: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    associatedWith: new FormControl(''),
    projectURL: new FormControl(''),
    description: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

}
