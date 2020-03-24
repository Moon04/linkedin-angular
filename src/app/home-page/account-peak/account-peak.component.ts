import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/model/account.service";

@Component({
  selector: "app-account-peak",
  templateUrl: "./account-peak.component.html",
  styleUrls: ["./account-peak.component.scss"]
})
export class AccountPeakComponent implements OnInit {
  account;
  constructor() {
    this.account = AccountService.returnAccount();
  }
  ngOnInit() {}
}
