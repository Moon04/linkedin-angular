import { Component, OnInit, Input } from '@angular/core';
import { ProfileAccomplishments } from 'src/app/_model/ProfileAccomplishments';
import { ProfileService } from './../../profile.service';

@Component({
  selector: 'app-accomplishments-section',
  templateUrl: './accomplishments-section.component.html',
  styleUrls: ['./accomplishments-section.component.css']
})
export class AccomplishmentsSectionComponent {

  dropdownStatus: boolean = false;
  
  constructor(public profileService: ProfileService) { }

}
