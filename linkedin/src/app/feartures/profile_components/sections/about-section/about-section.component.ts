import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

  @Input() currentIndex: number;
  
  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

}
