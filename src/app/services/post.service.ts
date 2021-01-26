import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Post } from "../model/post.interface";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PostService{
    private url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient){}

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.url);
    }

    
    async getPostsAsync(): Promise<Post[]> {
        return await this.http.get<Post[]>(this.url).toPromise();
    }
}