import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {

   public title = '';

  constructor() { }

  setTitle(title) {

    this.title = title;
  }

  getTitle() : string{
      return this.title;
  }
}
