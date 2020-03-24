import { Component, Input} from '@angular/core';
import { Profile } from 'src/app/_model/profile';
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
  
}
