import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class AccountService {
  static account = {
    id: 10,
    name: "Jane Doe",
    intro:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ab perferendis.",
    imgURL: "assets/accountimage.jpg",
    title: "My Company",
    viewers: {
      profile: 50,
      post: 42
    }
  };

  constructor() { }
  static returnAccount() {
    return AccountService.account;
  }
}
