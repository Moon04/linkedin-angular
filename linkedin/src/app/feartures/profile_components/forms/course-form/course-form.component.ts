import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  @Input() openCourseForm: boolean;

  courseForm = new FormGroup({
    courseName: new FormControl(''),
    associatedWith: new FormControl('')

  });

  constructor() { }

  ngOnInit(): void {
  }

}
