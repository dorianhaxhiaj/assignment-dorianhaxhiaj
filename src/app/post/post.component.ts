import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Post } from "../model/post.interface";

@Component({
  selector: "single-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent {
  showID = true;
  @Input() post: Post;
}
