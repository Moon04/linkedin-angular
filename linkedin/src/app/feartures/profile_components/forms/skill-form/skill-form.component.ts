import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {

  @Input() openSkillForm: boolean;

  skillForm = new FormGroup({
    skill: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
