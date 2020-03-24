import { Injectable } from "@angular/core";
import { Post } from "./post";
import { PostComments } from './comment';
@Injectable({
	providedIn: "root"
})
export class PostService {
	static posts = [
		new Post(
			1,
			"blah blah blah blah blah blah blah blah blah blah blah", 1, false, 0, 1,
			5, [
			new PostComments(1, "blah blah blah")
		]),
		new Post(
			2,
			"blah blah blah blah blah blah blah blah blah blah blah", 2, false, 0, 1,
			6, [
			new PostComments(1, "blah blah blah"),
			new PostComments(2, "blah blah blah")
		]),
		new Post(
			3,
			"blah blah blah blah blah blah blah blah blah blah blah", 3, false, 6, 2,
			7, []),
		new Post(
			4,
			"blah blah blah blah blah blah blah blah blah blah blah", 90, false, 0, 2,
			8, []),
		new Post(
			5,
			"", 2, true, 6, 3,
			9, [
			new PostComments(1, "blah blah blah"),
			new PostComments(2, "blah blah blah"),
			new PostComments(3, "blah blah blah"),
			new PostComments(2, "blah blah blah")
		]),
		new Post(
			6,
			"", 9, true, 3, 3,
			10, [])
	];
	static postAccounts = [
		{
			id: 1,
			name: "John Doe",
			title: "ACME Company",
			imgURL: "assets/connection.jpg"
		}
		,
		{
			id: 2,
			name: "James Doe",
			title: "ACME Company",
			imgURL: "assets/connection.jpg"
		},
		{
			id: 3,
			name: "Jack Doe",
			title: "ACME Company",
			imgURL: "assets/connection.jpg"
		}
	]
	constructor() { }
	static returnPosts() {
		return PostService.posts;
	}
	static returnAccount() {
		return PostService.postAccounts;
	}
	static addPost(post) {
		PostService.posts.splice(0, 0, post)
	}
}
