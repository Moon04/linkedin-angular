import { PostComments } from './comment';
export class Post {
  id: number;
  accountID: number;
  post: string;
  time: number;
  isShared: boolean;
  sharedID: number;
  likes: number;
  comments: PostComments[];

  constructor(id, post, time, isShared, sharedID, accountID, likes, comments) {
    this.id = id;
    this.accountID = accountID;
    this.post = post;
    this.time = time;
    this.isShared = isShared;
    this.sharedID = sharedID;
    this.likes = likes;
    this.comments = comments;
  }
  incrementLikes() {
    this.likes++;
  }
  decrementLikes() {
    this.likes--;
  }
  addComments(acc, comment) {
    this.comments.push(new PostComments(acc, comment));
  }
  getTime() {
    this.time++;
    if (this.time >= 60) {
      return `${Math.floor(this.time / 60)} h ${this.time -
        Math.floor(this.time / 60) * 60} min`;
    }
    return `${this.time} min`;
  }
}
