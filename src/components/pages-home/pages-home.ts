import { Component } from '@angular/core';

/**
 * Generated class for the PagesHome component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pages-home',
  templateUrl: 'pages-home.html'
})
export class PagesHome {

  text: string;

  constructor() {
    console.log('Hello PagesHome Component');
    this.text = 'Hello World';
  }

}
