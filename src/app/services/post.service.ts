import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

  getPostById(postId) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + postId).toPromise();
  }

  createPost(post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }

  editPost(post, postId) {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/' + postId, post);
  }
}
