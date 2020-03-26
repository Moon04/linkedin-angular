import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { faEllipsisH, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { PostComments } from 'src/app/_models/comment';
import { ProfileService } from 'src/app/feartures/profile_components/profile.service';
import { AccountService } from 'src/app/features/account.service';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: "app-post-cards",
  templateUrl: "./post-cards.component.html",
  styleUrls: ["./post-cards.component.css"]
})
export class PostCardsComponent implements OnInit {
  @Input() post;
  @Input() account;
  @Input() comment;
  @Input() posts;
  faEllipsisH = faEllipsisH;
  faThumbsUp = faThumbsUp;
  isliked = false;
  isHidden = true;
  isMyPost;
  time = '';
  isPostHidden = false;
  isEditing = false;
  beforeEdit;
  sharedPost;//Just Initialization
  sharedAccount;
  myAccount = new ProfileService().profiles.filter(p => p.id == Number(localStorage.getItem('currentUser')))[0];
  listOfAccounts = new AccountService().accounts;
  listOfPosts = PostService.returnPosts()
  @Output()
  deleteMyPost = new EventEmitter<any>();
  @Output()
  sharePost = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.isMyPost = this.myAccount.id == this.post.accountID
    this.time = this.getTime()
    setInterval(() => {
      this.time = this.getTime();
    }, 60000);
    this.sharedPost = this.post;
    this.sharedAccount = this.account;
    if (this.post.isShared) {
      for (let i = 0; i < this.listOfPosts.length; i++) {
        let p = this.listOfPosts[i];
        if (p.id == this.post.sharedID) {
          if (!p.isShared) {
            this.sharedPost = p
          }
          else {
            this.post.sharedID = p[1].sharedID
            i = 0;
          }
        }
      }
      this.listOfAccounts.forEach((a) => {
        if (a.id == this.sharedPost.accountID) {
          this.sharedAccount = a;
        }
      })

    }

  }
  addLike() {
    this.isliked = !this.isliked;
    if (this.isliked) {
      this.post.incrementLikes()
    }
    else {
      this.post.decrementLikes()
    }
  }
  getTime() {
    let ret = this.post.getTime();
    return ret;
  }
  displayComments() {
    this.isHidden = !this.isHidden;
  }
  addComment(e) {
    let myComment = e.path[1].childNodes[0].value;
    if (myComment != "") {
      this.post.comments.push(new PostComments(this.post.comments.length + 1, myComment));
      this.comment.push({
        firstName: this.myAccount.profileIntro.firstName,
        lastName: this.myAccount.profileIntro.lastName,
        imageURL: this.myAccount.profileIntro.profilePhoto,
        id: this.myAccount.id
      })
    }
    e.path[1].childNodes[0].value = "";
  }
  hidePost() {
    this.isPostHidden = !this.isPostHidden
  }
  deletePost() {
    this.deleteMyPost.emit(this.post.id);
  }
  editPost() {

    this.beforeEdit = this.post.post;
    this.isEditing = !this.isEditing;

  }
  save(e) {
    this.isEditing = !this.isEditing;
    this.post.post = e.path[2].childNodes[1].textContent
  }
  cancel(e) {
    e.path[2].childNodes[1].textContent = this.beforeEdit
    this.isEditing = !this.isEditing;
  }
  sharingPost() {
    this.sharePost.emit(this.post.id);
  }

}
