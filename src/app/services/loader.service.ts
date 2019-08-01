import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loader: EventEmitter<boolean> = new EventEmitter();

  constructor() { }


  toggle(visible: boolean) {
    this.loader.emit(visible);
  }

}
