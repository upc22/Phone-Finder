import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

declare var window: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {
  smses:any;
  userForm = new FormGroup({
    code: new FormControl(),
    volume: new FormControl(),
    duration: new FormControl()
  });
  constructor() {
  }

  startService(){
    console.log(this.userForm.value);
    if(window.SMS){
      window.SMS.listSMS({},
      data => {
        this.smses = data;
      },
      error => {
        console.log(error);
      })
    }
  }


}
