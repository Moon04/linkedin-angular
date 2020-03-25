import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfileService } from './../../profile.service';

@Component({
  selector: 'app-accomplishments-section',
  templateUrl: './accomplishments-section.component.html',
  styleUrls: ['./accomplishments-section.component.css']
})
export class AccomplishmentsSectionComponent implements OnInit {

  dropdownStatus: boolean = false;
  
  @Output() courseMood = new EventEmitter<number>();
  @Output() projectMood = new EventEmitter<number>();
  @Output() languageMood = new EventEmitter<number>();

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

  onCourseForm(index: number){
    this.courseMood.next(index);
  }

  onProjectForm(index: number){
    this.projectMood.next(index);
  }

  onLanguageForm(index: number){
    this.languageMood.next(index);
  }
}
