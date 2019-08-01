import { Component, OnInit } from '@angular/core';
import {LoaderService} from '../../services/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loaderService: LoaderService) {
    console.log(1);
  }

  ngOnInit() {
    this.loaderService.toggle(false);
  }

}
