import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-intro-form',
  templateUrl: './intro-form.component.html',
  styleUrls: ['./intro-form.component.css']
})
export class IntroFormComponent implements OnInit {

  @Input() openIntroForm: boolean;

  introForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    headline: new FormControl(''),
    education: new FormControl(''),
    country: new FormControl(''),
    location: new FormControl(''),
    industry: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
