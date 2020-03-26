import { Component, OnInit } from "@angular/core";
import { Account } from "./../../../_model/account";
import { AccountService } from "./../../account.service";
import { Interst } from "./../../../_model/interst";

@Component({
  selector: "app-intersts-card",
  templateUrl: "./intersts-card.component.html",
  styleUrls: ["./intersts-card.component.css"]
})
export class InterstsCardComponent implements OnInit {
  accounts: Account[] = this.AccountService.accounts;
  currentAccount = this.AccountService.currentAccount;
  interstsLeft: Interst[] = [];
  interstsRight: Interst[] = [];
  fun() {
    if (this.accounts[this.currentAccount].intersts) {
      for (
        let i = 0;
        i < this.accounts[this.currentAccount].intersts.length / 2;
        i++
      ) {
        this.interstsLeft.push(this.accounts[this.currentAccount].intersts[i]);
      }
    }
    if (this.accounts[this.currentAccount].intersts) {
      for (
        let i = this.accounts[this.currentAccount].intersts.length / 2;
        i < this.accounts[this.currentAccount].intersts.length;
        i++
      ) {
        this.interstsRight.push(this.accounts[this.currentAccount].intersts[i]);
      }
    }
    // console.log(this.interstsLeft);
    // console.log(this.interstsRight);
  }
  constructor(public AccountService: AccountService) {}

  ngOnInit(): void {
    this.fun();
  }
}
