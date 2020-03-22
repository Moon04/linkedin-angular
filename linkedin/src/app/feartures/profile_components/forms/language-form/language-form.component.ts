import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})
export class LanguageFormComponent implements OnInit {

  @Input() openLanguageForm: boolean;

  languageForm = new FormGroup({
    language: new FormControl(''),
    proficiency: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
