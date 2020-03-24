import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})
export class LanguageFormComponent implements OnInit {

  languageForm = new FormGroup({
    language: new FormControl(''),
    proficiency: new FormControl('')
  });

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

  saveLanguage(){
    this.profileService.accomplishments.languages.push({
      language: this.languageForm.value.language,
      proficiency: this.languageForm.value.proficiency
    });
    this.profileService.openLanguageForm = !this.profileService.openLanguageForm;
  }
}
