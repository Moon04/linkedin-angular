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

  @Input() moodIndex: number;
  mood: string = "Add";


  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.moodIndex !== -1) {
      const i = this.moodIndex;
      this.mood = "Edit"
      this.courseForm.patchValue({
        courseName: this.profileService.accomplishments.courses[i].courseName,
        associatedWith: this.profileService.accomplishments.courses[i].associatedWith
      });
    }

    else{
      this.mood = "Add";
      this.courseForm.patchValue({
        courseName: '',
        associatedWith: ''
      });
    }
  }

  saveCourse(){
    this.profileService.accomplishments.courses.push({
      courseName: this.courseForm.value.courseName ,
      associatedWith: this.profileService.organizations[this.courseForm.value.associatedWith ]
    });
    this.profileService.openCourseForm = !this.profileService.openCourseForm;
  }

}
