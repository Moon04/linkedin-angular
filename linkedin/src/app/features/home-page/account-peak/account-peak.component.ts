import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/app/_services/account.service";

@Component({
  selector: "app-account-peak",
  templateUrl: "./account-peak.component.html",
  styleUrls: ["./account-peak.component.css"]
})
export class AccountPeakComponent implements OnInit {
  account;
  constructor() {
    this.account = AccountService.returnAccount();
  }
  ngOnInit() {}
}
