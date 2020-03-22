import { Component, OnInit, Input } from '@angular/core';
import { ProfileAccomplishments } from 'src/app/_model/ProfileAccomplishments';

@Component({
  selector: 'app-accomplishments-section',
  templateUrl: './accomplishments-section.component.html',
  styleUrls: ['./accomplishments-section.component.css']
})
export class AccomplishmentsSectionComponent {

  @Input() profileAccomplishments: ProfileAccomplishments;
  constructor() { }

}
