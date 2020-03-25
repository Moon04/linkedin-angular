import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.css']
})
export class AboutFormComponent implements OnInit {

  @Input() currentIndex;

  aboutForm = new FormGroup({
    about: new FormControl('')
  });
  
  constructor(public profileService: ProfileService) { 
  }

  ngOnInit(): void {
    this.aboutForm.patchValue({
      about: this.profileService.profiles[this.currentIndex].profileAbout.about
    });
  }

  saveAbout(){
    this.profileService.profiles[this.currentIndex].profileAbout = this.aboutForm.value.about;
    this.profileService.profiles[this.currentIndex].openAboutForm = ! this.profileService.profiles[this.currentIndex].openAboutForm;
  }

}
