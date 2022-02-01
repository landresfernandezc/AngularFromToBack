import { Component, Input, OnInit } from "@angular/core";
import { Post } from "src/app/models/Post";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    title: "",
    body: "",
    id: 0,
  };
  isEdit: boolean = false;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPost().subscribe((posts) => {
      this.posts = posts;
    });
  }
  onNewPost(post: Post) {
    this.posts.unshift(post);
  }
  updatePost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }
  onUpdatedPost(post: Post) {
    this.posts.forEach((current, index) => {
      if (post.id === current.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
        this.isEdit = false;
        this.currentPost = {
          title: "",
          body: "",
          id: 0,
        };
      }
    });
  }
}
