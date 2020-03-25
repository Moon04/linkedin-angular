import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { PostService } from "src/app/_services/post.service";
import { PostCardsComponent } from "./post-cards/post-cards.component";
import { Post } from 'src/app/_models/post';
import { AccountService } from 'src/app/_services/account.service';


@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts = PostService.returnPosts();
  accounts = PostService.returnAccount();
  myAccount = AccountService.returnAccount();
  passedAccounts;
  passedAccountComments;
  passedData;

  constructor() {
  }
  ngOnInit() {
    this.passedAccounts = this.buildPassedAccounts();
    this.passedAccountComments = this.buildPassedAccountsComments();
    this.passedData = this.buildPassedData();
  }
  buildPassedAccounts() {
    let arr = []
    this.posts.forEach((p) => {
      if (this.myAccount.id == p.accountID) {
        arr.push(this.myAccount)
      }
      else {
        this.accounts.forEach((a) => {
          if (a.id == p.accountID) {
            arr.push(a)
          }
        })
      }
    })
    return arr;
  }
  buildPassedAccountsComments() {
    let arr = []
    this.posts.forEach((p) => {
      let parr = []
      p.comments.forEach((c) => {

        this.accounts.forEach((a) => {
          if (a.id == c.accountID) {
            parr.push(a)
          }

        })
      })
      arr.push(parr)
    })
    return arr;
  }
  buildPassedData() {
    let arr = []
    for (let i = 0; i < this.posts.length; i++) {
      arr.push([this.passedAccounts[i], this.posts[i], this.passedAccountComments[i]])
    }
    return arr;
  }
  addPost(e) {
    //id, post, time, isShared, sharedID, accountID, likes, comments
    let postBody = e.path[1].childNodes[0].value
    if (postBody != "") {

      this.posts.splice(0, 0, new Post(
        this.posts.length + 1,
        postBody,
        0,
        false,
        0,
        AccountService.returnAccount().id,
        0,
        []
      ))
      this.passedAccounts.splice(0, 0, AccountService.returnAccount());
      this.passedAccountComments = this.buildPassedAccountsComments();
      this.passedData = this.buildPassedData();
      e.path[1].childNodes[0].value = "";
    }
  }
  deletePost(id) {
    let index;
    this.posts.forEach((p, i) => {
      if (p.id == id) {
        index = i
      }
    })
    console.log(this.posts)
    this.posts.splice(index, 1)
    this.passedAccounts = this.buildPassedAccounts();
    this.passedAccountComments = this.buildPassedAccountsComments();
    this.passedData = this.buildPassedData();

  }
  sharePost(id) {
    console.log(id)

    this.posts.splice(0, 0, new Post(
      this.posts.length + 1,
      "",
      0,
      true,
      id,
      AccountService.returnAccount().id,
      0,
      []
    ))
    this.passedAccounts.splice(0, 0, AccountService.returnAccount());
    this.passedAccountComments = this.buildPassedAccountsComments();
    this.passedData = this.buildPassedData();

  }

}
