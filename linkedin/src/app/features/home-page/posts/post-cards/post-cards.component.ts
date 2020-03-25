import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { faEllipsisH, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { PostComments } from 'src/app/_models/comment';
import { AccountService } from 'src/app/_services/account.service';

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
  sharedPost;
  sharedAccount;
  myAccount = AccountService.returnAccount()
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
    this.sharedPost = this.post
    if (this.post.isShared) {
      for (let i = 0; i < this.posts.length; i++) {
        let p = this.posts[i];
        if (p[1].id == this.post.sharedID) {
          if (!p[1].isShared) {
            this.sharedPost = {
              name: p[0].name,
              imgURL: p[0].imgURL,
              post: p[1]
            }
          }
          else {
            this.post.sharedID = p[1].sharedID
            i = 0;
          }
        }
      }

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
      this.comment.push(this.myAccount)
    }
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
  save() {
    this.isEditing = !this.isEditing;
  }
  cancel(e) {
    e.path[2].childNodes[1].textContent = this.beforeEdit
    this.isEditing = !this.isEditing;
  }
  sharingPost() {
    this.sharePost.emit(this.post.id);
  }

}
