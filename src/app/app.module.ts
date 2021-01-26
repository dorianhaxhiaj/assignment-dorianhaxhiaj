import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { MatrixPipe } from './pipe/matrix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MatrixPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent, PostComponent]
})
export class AppModule { }
