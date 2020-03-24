import { Injectable } from "@angular/core";
import { Account } from "./../_model/account";
import { AccountService } from "./account.service";
import { MyAccountService } from "./my-account.service";
import { element } from "protractor";

@Injectable({
  providedIn: "root"
})
export class MutualsPastConnectionsService {
  constructor(
    public AccountService: AccountService,
    public MyAccountService: MyAccountService
  ) {}
  //past connection bttmly mn l intro card lma ba3ml remove connection
  pastConnections: Account[] = [];
  //3ayza l mutual connections array ttmly bl connections l moshtrka beeny w been l connections bto3y
  mutualConnections: Account[] = [];
  //a2dar mn array l accounts a-access l connections bta3t l connections bta3ty
  accounts: Account[] = this.AccountService.accounts;
  myAccount: Account = this.MyAccountService.myAccount;
  //current account index
  currentAccount: number = this.AccountService.currentAccount;
  myConnections: Account[] = [];
  //array feha kol l connections bta3t kol l connections ly 3andy
  othersConnections: Account[] = [];
  //array feeha l connections bta3t l connection ly ana wa2fa 3aleeh bs
  currentConnectionArray: Account[] = [{}];

  checkMutualConnections() {
    this.myConnections = this.myAccount.connections.map(
      element => element //.id
    );

    for (let i = 0; i < this.accounts.length; i++) {
      for (let j = 0; j < this.accounts[i].connections.length; j++) {
        this.othersConnections.push(
          this.accounts[i].connections[j] //.id
        );
      }
    }

    console.log(this.currentConnectionArray);
    //mutuals among all my connections
    // console.log(this.myConnections);
    // console.log(this.othersConnections);
    // for (let i = 0; i < this.myConnections.length; i++) {
    //   for (let j = 0; j < this.othersConnections.length; j++) {
    //     if (this.myConnections[i].id === this.othersConnections[j].id) {
    //       this.mutualConnections.push(this.othersConnections[j]);
    //     }
    //   }
    // }
    // console.log(this.mutualConnections);
  }

  //returns the mutuals between me and a specific connection
}
