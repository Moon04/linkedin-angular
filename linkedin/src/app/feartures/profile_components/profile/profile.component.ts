import { Component, OnInit} from '@angular/core';

import { Organization } from 'src/app/_model/organization';
import { ProfileService } from './../profile.service';
import { Profile } from 'src/app/_model/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;

  organizations: Organization[];
  
  constructor(public profileService: ProfileService) { }

  ngOnInit(): void{

    this.organizations = this.profileService.organizations;

    this.profile = {
      id: "1",
      profileIntro: this.profileService.intro,
      profileAbout: this.profileService.about,
      profileDashboard: this.profileService.dashboard,
      profileBackground: this.profileService.background,
      profileSkills: this.profileService.skills,
      profileAccomplishments: this.profileService.accomplishments,
      profileInterests: this.profileService.interests
    }

  }


}
