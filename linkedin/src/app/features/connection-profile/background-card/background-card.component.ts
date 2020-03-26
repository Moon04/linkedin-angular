import { Component, OnInit } from "@angular/core";
import { Account } from "./../../../_model/account";
import { AccountService } from "src/app/features/account.service";
import { VolunteerInfo } from "./../../../_model/volunteer-info";
import { WorkInfo } from "./../../../_model/work-info";
import { EducationInfo } from "./../../../_model/education-info";

@Component({
  selector: "app-background-card",
  templateUrl: "./background-card.component.html",
  styleUrls: ["./background-card.component.css"]
})
export class BackgroundCardComponent implements OnInit {
  accounts: Account[] = this.AccountService.accounts;
  currentAccount: number = this.AccountService.currentAccount;
  workData: WorkInfo[] = [];
  educationData: EducationInfo[] = [];
  volunteerData: VolunteerInfo[] = [];
  fillData() {
    if (this.accounts[this.currentAccount].workPlace) {
      for (
        let j = 0;
        j < this.accounts[this.currentAccount].workPlace.length;
        j++
      ) {
        this.workData.push(this.accounts[this.currentAccount].workPlace[j]);
      }
    }
    //console.log(this.workData);
    if (this.accounts[this.currentAccount].studyPlace) {
      for (
        let i = 0;
        i < this.accounts[this.currentAccount].studyPlace.length;
        i++
      ) {
        this.educationData.push(
          this.accounts[this.currentAccount].studyPlace[i]
        );
      }
    }
    //console.log(this.educationData);
    if (this.accounts[this.currentAccount].volunteerExperience) {
      for (
        let z = 0;
        z < this.accounts[this.currentAccount].volunteerExperience.length;
        z++
      ) {
        this.volunteerData.push(
          this.accounts[this.currentAccount].volunteerExperience[z]
        );
      }
      //console.log(this.volunteerData);
    }
  }

  constructor(public AccountService: AccountService) {}

  ngOnInit(): void {
    this.fillData();
  }
}
