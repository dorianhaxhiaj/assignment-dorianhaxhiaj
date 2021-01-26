import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Post } from "../model/post.interface";


@Injectable()
export class PostService{
    private url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient){}

    getPosts(){
        return this.http.get<Post[]>(this.url);
    }
}