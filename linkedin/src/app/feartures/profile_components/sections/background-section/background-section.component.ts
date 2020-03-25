import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ProfileService } from './../../profile.service';

@Component({
  selector: 'app-background-section',
  templateUrl: './background-section.component.html',
  styleUrls: ['./background-section.component.css']
})
export class BackgroundSectionComponent implements OnInit {
  
  @Input() currentIndex;
  
  @Output() workMood = new EventEmitter<number>();
  @Output() educationMood = new EventEmitter<number>();
  @Output() volunteerMood = new EventEmitter<number>();


  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

  onWorkForm(index: number){
      this.workMood.next(index);
  }

  onEducationForm(index: number){
    this.educationMood.next(index);
  }

  onVolunteerForm(index: number){
    this.volunteerMood.next(index);
  }

}
