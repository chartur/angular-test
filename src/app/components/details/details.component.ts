import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoaderService} from '../../services/loader.service';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  postId: number;

  postEditForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  constructor(
    private loaderService: LoaderService,
    private postService: PostService,
    private router: ActivatedRoute,
    private nav: Router
  ) {
    this.loaderService.toggle(true);
    this.router.params.subscribe((params) => {
      this.postId = params.id;
      this.getPostById();
    });
  }

  ngOnInit() {
  }

  async getPostById() {
    try {
      let post: any = await this.postService.getPostById(this.postId);
      this.postEditForm = new FormGroup({
        title: new FormControl(post.title, Validators.required),
        body: new FormControl(post.body, Validators.required),
      });
    } catch (e) {
      alert(e.message);
    }
    this.loaderService.toggle(false);
  }

  onSubmit() {
    let post = this.postEditForm.value;

    this.postService.editPost(post, this.postId).subscribe(
      (data) => {
        alert('Post successfully updated!');
        this.nav.navigate(['/posts']);
      },
      (err) => { alert(err.message); }
    );
  }
}
