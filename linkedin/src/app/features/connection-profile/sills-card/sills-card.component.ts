import { Component, OnInit } from "@angular/core";
import { Account } from "./../../../_model/account";
import { AccountService } from "./../../account.service";
import { Skill } from "./../../../_model/skill";
import { Endorser } from "./../../../_model/endorser";
import { EventEmitter } from "protractor";

@Component({
  selector: "app-sills-card",
  templateUrl: "./sills-card.component.html",
  styleUrls: ["./sills-card.component.css"]
})
export class SillsCardComponent implements OnInit {
  accounts: Account[] = this.AccountService.accounts;
  currentAccount: number = this.AccountService.currentAccount;
  skillsList: Skill[] = [];
  endorsersList: Endorser[] = [];
  endorsersNames: string[] = [];

  fillSkillsList() {
    if (this.accounts[this.currentAccount].skills) {
      for (
        let j = 0;
        j < this.accounts[this.currentAccount].skills.length;
        j++
      ) {
        this.skillsList.push(this.accounts[this.currentAccount].skills[j]);
      }
    }
    //console.log(this.skillsList);
    for (let i = 0; i < this.skillsList.length; i++) {
      for (let j = 0; j < this.skillsList[i].endorsers.length; j++)
        this.endorsersList.push(this.skillsList[i].endorsers[j]);
    }
    //console.log(this.endorsersList);
    for (let i = 0; i < this.endorsersList.length; i = i + 2) {
      this.endorsersNames.push(this.endorsersList[i].endorserName);
    }
    //console.log(this.endorsersNames);
  }
  EndorsementIncrement(i: number) {
    this.skillsList[i].noEndorsements++;
  }

  constructor(public AccountService: AccountService) {}

  ngOnInit(): void {
    this.fillSkillsList();
  }
}
