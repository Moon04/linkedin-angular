import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {

  @Input() currentIndex: number;

  skillForm = new FormGroup({
    skill: new FormControl('')
  });

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
  }

  saveSkill(){
    this.profileService.profiles[this.currentIndex].profileSkills.push({
      id: this.profileService.profiles[this.currentIndex].profileSkills[this.profileService.profiles[this.currentIndex].profileSkills.length-1].id + 1,
      skillTitle: this.skillForm.value.skill,
      endorsements: []
    });
    this.profileService.profiles[this.currentIndex].openSkillForm =! this.profileService.profiles[this.currentIndex].openSkillForm;
  }

}
