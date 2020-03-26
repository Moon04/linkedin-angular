import { Component, OnInit } from "@angular/core";
//import { AccountService } from "./../../account.service";
import { Account } from "./../../../_model/account";
import { MutualsPastConnectionsService } from "./../../mutuals-past-connections.service";
import { AccountService } from "src/app/features/account.service";
import { MyAccountService } from "./../../my-account.service";
import { EducationInfo } from "src/app/_model/education-info";

@Component({
  selector: "app-highlights-card",
  templateUrl: "./highlights-card.component.html",
  styleUrls: ["./highlights-card.component.css"]
})
export class HighlightsCardComponent implements OnInit {
  currentConnectionArray: Account[] = [];
  accounts: Account[] = this.AccountService.accounts;
  myAccountData: Account = this.MyAccountService.myAccount;
  currentAccount: number = this.AccountService.currentAccount;
  educationData: string[] = [];
  myEducationData: string[] = [];
  commonEducation: string[] = [];
  myAccount: Account;

  fun() {
    this.currentConnectionArray = [];
    this.saveConnectionsOfCurrent();
    if (this.accounts[this.currentAccount].studyPlace) {
      for (
        let i = 0;
        i < this.accounts[this.currentAccount].studyPlace.length;
        i++
      ) {
        this.educationData.push(
          this.accounts[this.currentAccount].studyPlace[i].title
        );
      }
    }
    if (this.accounts[this.currentAccount].studyPlace) {
      for (let i = 0; i < this.myAccountData.studyPlace.length; i++) {
        this.myEducationData.push(this.myAccountData.studyPlace[i].title);
      }
    }

    for (let i = 0; i < this.myEducationData.length; i++) {
      for (let j = 0; j < this.educationData.length; j++) {
        if (this.myEducationData[i] === this.educationData[j]) {
          this.commonEducation.push(this.myEducationData[i]);
        }
      }
    }
    // console.log(this.educationData);
    // console.log(this.myEducationData);
    // console.log(this.commonEducation);
  }
  saveConnectionsOfCurrent() {
    for (
      let i = 0;
      i < this.accounts[this.currentAccount].connections.length;
      i++
    ) {
      this.currentConnectionArray.push(
        this.accounts[this.currentAccount].connections[i]
      );
    }
    //console.log(this.currentConnectionArray);
  }
  constructor(
    public AccountService: AccountService,
    public MutualsPastConnectionsService: MutualsPastConnectionsService,
    public MyAccountService: MyAccountService
  ) {}
  ngOnInit(): void {
    //this.saveConnectionsOfCurrent();
    this.fun();
  }
}
