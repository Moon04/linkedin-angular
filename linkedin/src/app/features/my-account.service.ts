import { Injectable } from "@angular/core";
import { Account } from "./../_model/account";
// import { AccountService } from "./account.service";
// import { MutualsPastConnectionsService } from "./mutuals-past-connections.service";
//import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: "root"
})
export class MyAccountService {
  myAccount: Account = {
    id: 7,
    firstName: "Mariam",
    lastName: "Hasan",
    position: "Front end developer",
    imageURL: ["assets/images/profile_pic111.jpg"],
    connections: [
      //first connection mn 3and id 1
      {
        id: 10,
        firstName: "Ahmed",
        lastName: "Amer",
        position: "java developer",
        imageURL: ["assets/images/1.jpg"],
        pastConnection: false,
        about: [
          "Java developer seeking an opportunity in a multi-national company to help me widen my knowledge and improve my skills"
        ]
      },
      //first connection mn 3and id 2
      {
        id: 8,
        firstName: "Khaled",
        lastName: "Saleh",
        position: "student",
        imageURL: ["assets/images/1.jpg"],
        pastConnection: false,
        about: [
          ".net developer seeking an opportunity in a multi-national company to help me widen my knowledge and improve my skills"
        ]
      }
    ],
    studyPlace: [
      {
        title: "Ain shams University",
        logoURL: ["assets/images/Engineering.png"]
      }
    ],
    workPlace: [{ title: "ITworx", logoURL: ["assets/images/itworxLogo.png"] }],
    country: "Egypt",
    about: ["passionate and hard worker"]
  };

  constructor() {}
}
