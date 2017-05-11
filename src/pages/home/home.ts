import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {
  userForm = new FormGroup({
    code: new FormControl(),
    volume: new FormControl(),
    duration: new FormControl()
  });
  constructor() {
  }

  startService(){
    console.log(this.userForm.value);
  }


}
