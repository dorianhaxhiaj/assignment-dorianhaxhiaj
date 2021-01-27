# assignment-dorianhaxhiaj
Angular application that render 100 post from jsonplaceholder in square 10x10.
Handled get request to https://jsonplaceholder.typicode.com/posts in two different way. One using promises and another using Rxjs library.

## Implementation

### Http Request 
* With RXjs library
```
getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }
```
* Without RXjs library
```
 async getPostsAsync(): Promise<Post[]> {
    return await this.http.get<Post[]>(this.url).toPromise();
  }
```
### Share State
 
* With RXjs library
```
  this.postService
      .getPosts()
      .subscribe((response: Post[]) => (this.loadedPosts = response));
```
* Without RXjs library
```
  async ngOnInit() {
    this.loadedPosts = await this.postService.getPostsAsync();
  }
```
### Render Posts
* Created Pipe to transform the array in a two dimensional array and than render it in the html file
```
  transform(arr: number[], n: number): number[][] {
    const rows = Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => i);
    return rows.map(idx => arr.slice(idx * n, idx * n + n));
  }
```
```
<table style="margin-top:30px">
    <tr *ngFor="let row of loadedPosts | toMatrix:n">
      <td *ngFor="let column of row">
        <single-post [post]="column"></single-post>
      </td>
    </tr>
  </table>
```
### Click Functionality (Default render id , when clicked render userId when click again renderId and so on..)

* Created a flag variable default true and change it to false when it click and used operator "? :" to show the id or userId.
```
<div class="list-group-item" (click)="showID= !showID">
    {{showID ? post.id : post.userId}}
</div>
```

## Getting Started

### Technology

* Angular: 11.1.1
* Node: 14.15.4

### Installing and Executing program

* Clone project : git clone https://github.com/dorianhaxhiaj/assignment-dorianhaxhiaj.git
* Run : ng serve
* Url: http://localhost:4200/


## Author

[@Dorian Haxhiaj](https://www.linkedin.com/in/dorian-haxhiaj-185ba710a/)
