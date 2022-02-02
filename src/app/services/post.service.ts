import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl:string = 'https://jsonplaceholder.typicode.com/posts/';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http:HttpClient) {

   }
  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }
  savePost(post:Post):Observable<Post>{
    return this.http.post<Post>(this.postUrl,post,this.httpOptions);
  }
  updatePost(post:Post):Observable<Post>{
    return this.http.put<Post>(`${this.postUrl}/${post.id}`,post,this.httpOptions);
  }
  removePost(post:Post | number):Observable<Post>{
    const id= typeof post === 'number' ? post: post.id;
    return this.http.delete<Post>(`${this.postUrl}/${id}`,this.httpOptions);
  }
}
