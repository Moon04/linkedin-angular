import { Component, OnInit } from "@angular/core";
import { AccountPeakComponent } from "./account-peak/account-peak.component";
import { HomeConnectorsComponent } from "./home-connectors/home-connectors.component";
import { PostsComponent } from "./posts/posts.component";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
