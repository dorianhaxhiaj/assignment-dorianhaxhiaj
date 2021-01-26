import { Component, OnDestroy, OnInit } from "@angular/core";
import { PostService } from "./services/post.service";
import { Post } from "./model/post.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Assignment - Dorian Haxhiaj";
  loadedPosts: Post[] = [];
  n = 10;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService
      .getPosts()
      .subscribe((response: Post[]) => (this.loadedPosts = response));
  }
}
