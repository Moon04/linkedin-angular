import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/app/features/account.service";
import { Account } from "./../../../_model/account";
import { ConnectionProfileService } from "../connection-profile.service";

@Component({
  selector: "app-connections-page",
  templateUrl: "./connections-page.component.html",
  styleUrls: ["./connections-page.component.css"]
})
export class ConnectionsPageComponent implements OnInit {
  accounts: Account[] = this.AccountService.accounts;
  currentAccount: number = this.AccountService.currentAccount;
  id: number;

  clickConnection(i) {
    // this.id = this.accounts[i].id;
    // this.ConnectionProfileService.currentAccountID = this.id;
    this.AccountService.currentAccount = i;
    // console.log(this.ConnectionProfileService.currentAccountID);
    console.log(this.AccountService.currentAccount);
  }
  constructor(
    public AccountService: AccountService,
    public ConnectionProfileService: ConnectionProfileService
  ) {}

  ngOnInit(): void {}
}
