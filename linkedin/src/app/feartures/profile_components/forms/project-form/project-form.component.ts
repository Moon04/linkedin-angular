import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  projectForm = new FormGroup({
    projectName: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    associatedWith: new FormControl(''),
    projectURL: new FormControl(''),
    description: new FormControl('')
  });
  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

  saveProject(){
    this.profileService.accomplishments.projects.push({
      projectName: this.projectForm.value.projectName,
      startDate: this.projectForm.value.startDate,
      endDate: this.projectForm.value.endDate,
      associatedWith: this.profileService.organizations[this.projectForm.value.associatedWith],
      projectURL: this.projectForm.value.projectURL,
      description: this.projectForm.value.description
    });
    this.profileService.openProjectForm = !this.profileService.openProjectForm;
  }

}
