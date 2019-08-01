import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../../services/loader.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {PostService} from '../../services/post.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  constructor(
    private loaderService: LoaderService,
    private postService: PostService,
    private nav: Router
  ) {
    this.loaderService.toggle(false);

  }

  ngOnInit() {
  }

  onSubmit() {
    let post = this.postForm.value;
    post.userId = 1;

    this.postService.createPost(post).subscribe(
      (data) => {
        alert('Post successfully created!');
        this.nav.navigate(['/posts']);
      },
      (err) => { alert(err.message); }
    );
  }

}
