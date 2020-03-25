import { Component, OnInit, Input } from '@angular/core';
import { ProfileSkills } from 'src/app/_model/profileSkills';
import { ProfileService } from './../../profile.service';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {

  @Input() currentIndex;

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

}
