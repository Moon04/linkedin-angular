import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/app/_services/account.service";
import { ProfileService } from './../../../feartures/profile_components/profile.service';

@Component({
  selector: "app-account-peak",
  templateUrl: "./account-peak.component.html",
  styleUrls: ["./account-peak.component.css"]
})
export class AccountPeakComponent implements OnInit {
  account;
  constructor() {
    this.account;
    let s = new ProfileService();
    let id = localStorage.getItem('currentUser')
    let acc;
    s.profiles.forEach(p => {
      if (p.id == Number(id)) {
        this.account = p;
      }
    })
  }
  ngOnInit() { }
}
