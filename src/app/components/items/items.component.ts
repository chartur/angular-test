import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../../services/loader.service';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  posts: Post[] = [];
  paginationConfig = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0
  };

  constructor(
    private loaderService: LoaderService,
    private postService: PostService,
  ) {
    this.loaderService.toggle(true);
    this.getPosts();
  }

  ngOnInit() {
  }

  async getPosts() {
    try {
      this.posts = await this.postService.getAllPosts();
      this.paginationConfig.totalItems = this.posts.length;
    } catch (e) {
        alert(e.message);
    }
    this.loaderService.toggle(false);
  }

  pageChanged(event): void {
    this.paginationConfig.currentPage = event;
  }

}
