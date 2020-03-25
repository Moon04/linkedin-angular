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

  @Input() currentIndex;
  @Input() moodIndex: number;
  mood: string = "Add";

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.moodIndex !== -1) {
      const i = this.moodIndex;
      this.mood = "Edit"
      this.projectForm.patchValue({
        projectName: this.profileService.profiles[this.currentIndex].profileAccomplishments.projects[i].projectName,
        startDate: this.profileService.profiles[this.currentIndex].profileAccomplishments.projects[i].startDate,
        endDate: this.profileService.profiles[this.currentIndex].profileAccomplishments.projects[i].endDate,
        associatedWith: this.profileService.profiles[this.currentIndex].profileAccomplishments.projects[i].associatedWith,
        projectURL: this.profileService.profiles[this.currentIndex].profileAccomplishments.projects[i].projectURL,
        description: this.profileService.profiles[this.currentIndex].profileAccomplishments.projects[i].description
      });
    }

    else{
      this.mood = "Add";
      this.projectForm.patchValue({
        projectName: '',
        startDate: '',
        endDate: '',
        associatedWith: '',
        projectURL: '',
        description: ''
      });
    }
  }

  saveProject(){
    this.profileService.profiles[this.currentIndex].profileAccomplishments.projects.push({
      projectName: this.projectForm.value.projectName,
      startDate: this.projectForm.value.startDate,
      endDate: this.projectForm.value.endDate,
      associatedWith: this.profileService.organizations[this.projectForm.value.associatedWith],
      projectURL: this.projectForm.value.projectURL,
      description: this.projectForm.value.description
    });
    this.profileService.profiles[this.currentIndex].openProjectForm = !this.profileService.profiles[this.currentIndex].openProjectForm;
  }

}
