import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-contact-info-form',
  templateUrl: './contact-info-form.component.html',
  styleUrls: ['./contact-info-form.component.css']
})
export class ContactInfoFormComponent implements OnInit {

  @Input() currentIndex;

  contactInfoForm = new FormGroup({
    phone: new FormControl(''),
    address: new FormControl(''),
    birthday: new FormControl('')
  });

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
    this.contactInfoForm.patchValue({
      phone: this.profileService.profiles[this.currentIndex].profileIntro.phone,
      address: this.profileService.profiles[this.currentIndex].profileIntro.address,
      birthday: this.profileService.profiles[this.currentIndex].profileIntro.birthday
    })
  }

  saveContactInfo(){
    this.profileService.profiles[this.currentIndex].profileIntro.phone = this.contactInfoForm.value.phone ;
    this.profileService.profiles[this.currentIndex].profileIntro.address = this.contactInfoForm.value.address ;
    this.profileService.profiles[this.currentIndex].profileIntro.birthday = this.contactInfoForm.value.birthday ;
    this.profileService.profiles[this.currentIndex].openContactInfoForm = !this.profileService.profiles[this.currentIndex].openContactInfoForm;
  }

}
