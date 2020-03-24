import { Component, OnInit } from "@angular/core";
import { MutualsPastConnectionsService } from "./../../mutuals-past-connections.service";
import { AccountService } from "./../../account.service";
import { Account } from "./../../../_model/account";
//import { MyAccountService } from "./../../my-account.service";

@Component({
  selector: "app-about-card",
  templateUrl: "./about-card.component.html",
  styleUrls: ["./about-card.component.css"]
})
export class AboutCardComponent implements OnInit {
  // pastConnections: Account[]=this.MutualsPastConnectionsService.pastConnections;
  accounts: Account[] = this.AccountService.accounts;
  //index
  currentAccount = this.AccountService.currentAccount;

  pastConnections: Account[] = this.MutualsPastConnectionsService
    .pastConnections;
  // currentConnectionArray: Account[] = this.MutualsPastConnectionsService
  //   .currentConnectionArray;
  // print() {
  //   console.log(this.currentConnectionArray);
  // }
  constructor(
    public MutualsPastConnectionsService: MutualsPastConnectionsService,
    public AccountService: AccountService
  ) {}

  ngOnInit(): void {}
}
