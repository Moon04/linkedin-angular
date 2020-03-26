import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-home-connectors-cards",
  templateUrl: "./home-connectors-cards.component.html",
  styleUrls: ["./home-connectors-cards.component.css"]
})
export class HomeConnectorsCardsComponent implements OnInit {
  @Input() con;
  @Output() addConnection = new EventEmitter();
  constructor() {

  }

  ngOnInit() {

  }
  add() {
    console.log("hi")
    this.addConnection.emit(this.con.id);
  }
}
