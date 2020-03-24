import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.css']
})
export class AboutFormComponent implements OnInit {

  aboutForm = new FormGroup({
    about: new FormControl('')
  });
  
  constructor(public profileService: ProfileService) { 
  }

  ngOnInit(): void {
    this.aboutForm.patchValue({
      about: this.profileService.about.about
    });
  }

  saveAbout(){
    this.profileService.about = this.aboutForm.value.about;
    this.profileService.openAboutForm = ! this.profileService.openAboutForm;
  }

}
