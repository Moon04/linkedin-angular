import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  courseForm = new FormGroup({
    courseName: new FormControl(''),
    associatedWith: new FormControl('')
  });

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

  saveCourse(){
    this.profileService.accomplishments.courses.push({
      courseName: this.courseForm.value.courseName ,
      associatedWith: this.profileService.organizations[this.courseForm.value.associatedWith ]
    });
    this.profileService.openCourseForm = !this.profileService.openCourseForm;
  }

}
