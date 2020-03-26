import { Component, OnInit } from "@angular/core";
import { HomeConnectorsCardsComponent } from "./home-connectors-cards/home-connectors-cards.component";
import { AccountService } from './../../account.service';
import { ProfileService } from 'src/app/feartures/profile_components/profile.service';

@Component({
  selector: "app-home-connectors",
  templateUrl: "./home-connectors.component.html",
  styleUrls: ["./home-connectors.component.css"]
})
export class HomeConnectorsComponent implements OnInit {
  connectionSuggestion = [];
  connections = []
  constructor() {
    let allAccountList = new AccountService().accounts;
    this.connections = new ProfileService().profiles.filter((p) => p.id == Number(localStorage.getItem('currentUser')))[0].connetions
    allAccountList.forEach((s) => {
      this.connections.forEach((c) => {
        if (s.id != c) {
          this.connectionSuggestion.push(s)
        }
      })
    })
  }

  ngOnInit() {
  }
  addConnection(id) {
    this.connections.push(id)
    this.connectionSuggestion = this.connectionSuggestion.filter(s => s.id != id)
  }
}
