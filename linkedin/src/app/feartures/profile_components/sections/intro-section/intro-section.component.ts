import { Component, EventEmitter, Output} from '@angular/core';
import { ProfileService } from './../../profile.service';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css']
})
export class IntroSectionComponent{

  dropdownStatus: boolean = false;
  moreStatus: boolean = false;
  contactInfoStatus: boolean = false;

  @Output() workMood = new EventEmitter<number>();
  @Output() educationMood = new EventEmitter<number>();
  @Output() volunteerMood = new EventEmitter<number>();
  @Output() courseMood = new EventEmitter<number>();
  @Output() projectMood = new EventEmitter<number>();
  @Output() languageMood = new EventEmitter<number>();



  taps: boolean[] = [false, false, false, false, false];

  openTap(currentTap){
    for (let index = 0; index < this.taps.length; index++) {
      if(index === currentTap){
        this.taps[index] = true;
      }
      else{
        this.taps[index]=false;
      }
    }
  }

  constructor(public profileService: ProfileService) { }

  getConnectionsCount(){
    return this.profileService.intro.connectionsCount > 500? '500+' : this.profileService.intro.connectionsCount;
  }
  
  onWorkForm(index: number){
    this.workMood.next(index);
  }

  onEducationForm(index: number){
    this.educationMood.next(index);
  }

  onVolunteerForm(index: number){
    this.volunteerMood.next(index);
  }

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
