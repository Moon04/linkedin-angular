import { Component, OnInit } from "@angular/core";
import { HomeConnectorsCardsComponent } from "./home-connectors-cards/home-connectors-cards.component";
import { ConnectionsService } from "src/app/_services/connections.service";
@Component({
  selector: "app-home-connectors",
  templateUrl: "./home-connectors.component.html",
  styleUrls: ["./home-connectors.component.css"]
})
export class HomeConnectorsComponent implements OnInit {
  connectionSuggestion;
  constructor() {
    this.connectionSuggestion = ConnectionsService.returnConnectionSuggestion();
  }

  ngOnInit() {
    console.log(this.connectionSuggestion);
  }
}
