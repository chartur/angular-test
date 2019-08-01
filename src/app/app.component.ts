import {Component} from '@angular/core';
import {LoaderService} from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  visible: boolean = true;

  constructor(private loaderService: LoaderService) {
    this.loaderService.loader.subscribe((visible: boolean) => {
      this.visible = visible;
    });
  }

}
