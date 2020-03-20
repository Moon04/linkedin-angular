import { Component, Input} from '@angular/core';
import { ProfileIntro } from 'src/app/_model/profileIntro';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css']
})
export class IntroSectionComponent{

  @Input() profileIntro: ProfileIntro;

  dropdownStatus: boolean = false;
  moreStatus: boolean = false;

  constructor() { }

  getConnectionsCount(){
    return this.profileIntro.connectionsCount > 500? '500+' : this.profileIntro.connectionsCount;
  }

  changeDropdownStatus(){
    this.dropdownStatus = !this.dropdownStatus;
  }

  changeMoreStatus(){
    this.moreStatus = !this.moreStatus;
  }

  showContactInfo(){

  }
  
}
