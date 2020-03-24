import { Component, OnInit, Input } from '@angular/core';
import { ProfileBackground } from 'src/app/_model/profileBackground';
import { ProfileService } from './../../profile.service';

@Component({
  selector: 'app-background-section',
  templateUrl: './background-section.component.html',
  styleUrls: ['./background-section.component.css']
})
export class BackgroundSectionComponent implements OnInit {
  
  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

}
