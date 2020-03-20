import { Component, OnInit, Input } from '@angular/core';
import { ProfileInterest } from 'src/app/_model/profileInterest';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {

  @Input() profileIterests: ProfileInterest[];
  constructor() { }
}
