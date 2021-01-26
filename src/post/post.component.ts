import { Component, Input } from '@angular/core';
import { Post } from 'src/app/model/post.interface';


@Component({
  selector: 'single-post',
  templateUrl: './post.component.html'
})
export class PostComponent {
    @Input() loadedPost: Post;
    showString: number 

    // constructor(){
    //      this.showString=this.loadedPost.userId;   
    // }

    // changeString(){
    //     if(this.showString===this.loadedPost.userId) {
    //         this.showString=this.loadedPost.id;
    //     } else {
    //         this.showString=this.loadedPost.userId;
    //     }

    // }
}