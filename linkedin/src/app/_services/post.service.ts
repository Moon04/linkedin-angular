import { Injectable } from "@angular/core";
import { Post } from "../_models/post";
import { PostComments } from '../_models/comment';
@Injectable({
	providedIn: "root"
})
export class PostService {
	static posts = [
		new Post(
			1,
			"This Should not appear except as shared", 1, false, 0, 100,
			5, [
			new PostComments(1, "blah blah blah")
		]),
		new Post(
			2,
			"blah blah blah blah blah blah blah blah blah blah blah", 2, false, 0, 2,
			6, [
			new PostComments(1, "blah blah blah"),
			new PostComments(2, "blah blah blah")
		]),
		new Post(
			3,
			"blah blah blah blah blah blah blah blah blah blah blah", 3, false, 1, 2,
			7, []),
		new Post(
			4,
			"blah blah blah blah blah blah blah blah blah blah blah", 90, false, 0, 2,
			8, []),
		// new Post(
		// 	5,
		// 	"", 2, true, 6, 2,
		// 	9, [
		// 	new PostComments(1, "blah blah blah"),
		// 	new PostComments(2, "blah blah blah"),
		// 	new PostComments(3, "blah blah blah"),
		// 	new PostComments(2, "blah blah blah")
		// ]),
		new Post(
			6,
			"we", 9, true, 1, 2,
			10, []),
		new Post(
			7,
			"blah blah ", 9, false, 0, 3,
			10, [])

	];

	constructor() { }
	static returnPosts() {
		return PostService.posts;
	}

	static addPost(post) {
		PostService.posts.splice(0, 0, post)
	}
}
