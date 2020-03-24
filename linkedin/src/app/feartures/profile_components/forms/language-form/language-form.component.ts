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

  @Input() moodIndex: number;
  mood: string = "Add";

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.moodIndex !== -1) {
      const i = this.moodIndex;
      this.mood = "Edit"
      this.languageForm.patchValue({
        language: this.profileService.accomplishments.languages[i].language,
        proficiency: this.profileService.accomplishments.languages[i].proficiency
      });
    }

    else{
      this.mood = "Add";
      this.languageForm.patchValue({
        language: '',
        proficiency: ''
      });
    }
  }

  saveLanguage(){
    this.profileService.accomplishments.languages.push({
      language: this.languageForm.value.language,
      proficiency: this.languageForm.value.proficiency
    });
    this.profileService.openLanguageForm = !this.profileService.openLanguageForm;
  }
}
