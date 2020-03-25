import { Injectable } from "@angular/core";

// @Injectable({
//   providedIn: "root"
// })

//to be un commented, use mariam hassan's services

export class ConnectionsService {
  static suggestedconnections = [
    {
      name: "John Doe",
      title: "ACME Company",
      imgURL: "assets/connection.jpg" // "/connection.jpg" //WHY GOD WHY
    },
    {
      name: "James Doe",
      title: "ACME Company",
      imgURL: ""
    },
    {
      name: "Jack Doe",
      title: "ACME Company",
      imgURL: ""
    }
  ];
  constructor() { }
  static returnConnectionSuggestion() {
    return ConnectionsService.suggestedconnections;
  }
}
