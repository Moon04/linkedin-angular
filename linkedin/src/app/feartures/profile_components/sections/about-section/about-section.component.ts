import { Component, OnInit, Input } from '@angular/core';
import { ProfileAbout } from 'src/app/_model/profileAbout';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

}
