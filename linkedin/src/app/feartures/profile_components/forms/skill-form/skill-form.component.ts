import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {

  skillForm = new FormGroup({
    skill: new FormControl('')
  });

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
  }

  saveSkill(){
    this.profileService.skills.push({
      id: this.profileService.skills[this.profileService.skills.length-1].id + 1,
      skillTitle: this.skillForm.value.skill,
      endorsements: []
    });
    this.profileService.openSkillForm =! this.profileService.openSkillForm;
  }

}
