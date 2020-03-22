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
  contactInfoStatus: boolean = false;
  openIntroForm: boolean = false;

  constructor() { }

  getConnectionsCount(){
    return this.profileIntro.connectionsCount > 500? '500+' : this.profileIntro.connectionsCount;
  }

  showContactInfo(){

  }
  
}
