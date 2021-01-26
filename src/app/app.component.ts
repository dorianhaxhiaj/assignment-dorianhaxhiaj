import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { Post } from './model/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'assignment-dorianhaxhiaj';
  loadedPosts: Post[] = [];
  index: number = 0;
  showRow = [];
  n = 10;

  constructor(private postService: PostService) {}

  async ngOnInit() {
  

     this.loadedPosts = await this.postService.getPostsAsync();

  
  }

}
