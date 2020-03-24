import { Component, OnInit } from "@angular/core";
import { Account } from "./../../../_model/account";
import { AccountService } from "./../../account.service";
import { MutualsPastConnectionsService } from "./../../mutuals-past-connections.service";
import { element } from "protractor";

@Component({
  selector: "app-intro-card",
  templateUrl: "./intro-card.component.html",
  styleUrls: ["./intro-card.component.css"]
})
export class IntroCardComponent implements OnInit {
  accounts: Account[] = this.AccountService.accounts;
  pastConnections: Account[] = this.MutualsPastConnectionsService
    .pastConnections;
  connectionStatus = false;
  removeConnectionText = "Remove Connection";
  currentAccount = this.AccountService.currentAccount;
  currentID = this.accounts[this.currentAccount].id;
  deletedElement: Account[];
  // currentConnectionArray: Account[] = this.MutualsPastConnectionsService
  //   .currentConnectionArray;

  handleRemoveConnection(currentid: number) {
    //toggle connect button and connection degree
    // this.connectionStatus = !this.connectionStatus;
    // this.connectionStatus = !this.connectionStatus;
    // this.removeConnectionText === "Remove Connection"
    //   ? (this.removeConnectionText = "Connect")
    //   : (this.removeConnectionText = "Remove Connection");

    const Index = this.accounts.findIndex(element => element.id == currentid);
    this.deletedElement = this.accounts.splice(Index, 1);
    this.pastConnections.push(this.deletedElement[0]);
    //console.log(this.pastConnections);
    ////////////////////////////////////////////////////////
    this.MutualsPastConnectionsService.pastConnections = this.pastConnections.map(
      element => element
    );
    //function that raises pastConnection boolean in the account to true
    for (let i = 0; i < this.pastConnections.length; i++) {
      this.pastConnections[i].pastConnection = true;
    }
    //console.log(this.currentConnectionArray);
    console.log(this.MutualsPastConnectionsService.pastConnections);
    console.log(this.pastConnections);
    ////////////////////////////////////////////////////////

    this.AccountService.currentAccount++;
    // this.currentAccount++;
  }
  // print() {
  //   console.log(this.currentConnectionArray);
  // }

  constructor(
    public AccountService: AccountService,
    public MutualsPastConnectionsService: MutualsPastConnectionsService
  ) {}

  ngOnInit(): void {}
}
