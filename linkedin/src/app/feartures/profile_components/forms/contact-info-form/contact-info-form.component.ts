import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-contact-info-form',
  templateUrl: './contact-info-form.component.html',
  styleUrls: ['./contact-info-form.component.css']
})
export class ContactInfoFormComponent implements OnInit {

  contactInfoForm = new FormGroup({
    phone: new FormControl(''),
    address: new FormControl(''),
    birthday: new FormControl('')
  });

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
    this.contactInfoForm.patchValue({
      phone: this.profileService.intro.phone,
      address: this.profileService.intro.address,
      birthday: this.profileService.intro.birthday
    })
  }

  saveContactInfo(){
    this.profileService.intro.phone = this.contactInfoForm.value.phone ;
    this.profileService.intro.address = this.contactInfoForm.value.address ;
    this.profileService.intro.birthday = this.contactInfoForm.value.birthday ;
    this.profileService.openContactInfoForm = !this.profileService.openContactInfoForm;
  }

}
