import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { PostService } from "src/app/_services/post.service";
import { PostCardsComponent } from "./post-cards/post-cards.component";
import { Post } from 'src/app/_models/post';
import { AccountService } from 'src/app/features/account.service';
import { ProfileService } from 'src/app/feartures/profile_components/profile.service';

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts = PostService.returnPosts();
  accounts = new AccountService().accounts;
  myAccount = new ProfileService().profiles.filter(p => p.id == Number(localStorage.getItem('currentUser')))[0];
  passedAccounts = [];
  passedAccountComments = [];
  passedData = [];
  constructor() {
  }
  ngOnInit() {
    this.buildPassedAccounts();
    this.buildPassedAccountsComments();
    this.buildPassedData();
  }
  buildPassedAccounts() {
    this.posts.forEach((p) => {
      if (this.myAccount.id == p.accountID) {
        this.passedAccounts.push(this.myAccount)
      }
      else {
        this.accounts.forEach((a) => {
          if (a.id == p.accountID) {
            this.passedAccounts.push(a);
          }

        })
      }
    })
  }
  buildPassedAccountsComments() {
    this.posts.forEach((p) => {
      let parr = []
      p.comments.forEach((c) => {

        this.accounts.forEach((a) => {
          if (a.id == c.accountID) {
            parr.push(a)
          }

        })
      })
      this.passedAccountComments.push(parr)
    })
  }
  buildPassedData() {
    this.passedData = []
    for (let i = 0; i < this.posts.length; i++) {
      this.myAccount.connetions.forEach((c) => {
        if (c == this.passedAccounts[i].id || this.posts[i].accountID == this.myAccount.id) {
          this.passedData.push([this.passedAccounts[i], this.posts[i], this.passedAccountComments[i]])
        }
      })

    }
  }
  //Posting //Fixed
  addPost(e) {
    //id, post, time, isShared, sharedID, accountID, likes, comments
    let postBody = e.path[1].childNodes[0].value
    if (postBody != "") {
      this.posts = [
        new Post(
          this.posts.length + 1,
          postBody,
          0,
          false,
          0,
          this.myAccount.id,
          0,
          []
        ), ...this.posts
      ]
      this.passedAccounts = [{
        id: this.myAccount.id,
        firstName: this.myAccount.profileIntro.basicInfo.firstName,
        lastName: this.myAccount.profileIntro.basicInfo.lastName,
        postion: this.myAccount.profileIntro.basicInfo.recentJob,
        imageURL: this.myAccount.profileIntro.profilePhoto
      }, ...this.passedAccounts]
      this.passedAccountComments = [[], ...this.passedAccountComments]
      this.buildPassedData();
      e.path[1].childNodes[0].value = "";
    }
  }
  deletePost(id) {

    let index = null;
    this.posts.forEach((p, i) => {

      if (p.id == id && index == null) {
        index = i

      }
    })

    this.posts.splice(index, 1)
    this.passedAccounts.splice(index, 1)
    this.passedAccountComments.splice(index, 1)
    this.buildPassedData();


  }
  sharePost(id) {
    this.posts = [
      new Post(
        this.posts.length + 1,
        "",
        0,
        true,
        id,
        this.myAccount.id,
        0,
        []
      ), ...this.posts]
    this.passedAccounts = [{
      id: this.myAccount.id,
      firstName: this.myAccount.profileIntro.basicInfo.firstName,
      lastName: this.myAccount.profileIntro.basicInfo.lastName,
      postion: this.myAccount.profileIntro.basicInfo.recentJob,
      imageURL: this.myAccount.profileIntro.profilePhoto
    }, ...this.passedAccounts];
    this.passedAccountComments = [[], ...this.passedAccountComments]
    this.buildPassedData();

  }

}
