import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-home-connectors-cards",
  templateUrl: "./home-connectors-cards.component.html",
  styleUrls: ["./home-connectors-cards.component.css"]
})
export class HomeConnectorsCardsComponent implements OnInit {
  @Input() connection;
  constructor() {}

  ngOnInit() {}
}
