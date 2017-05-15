import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SMS } from '@ionic-native/sms';


@Component({
  selector: 'page-find-phone',
  templateUrl: 'find-phone.html',
})
export class FindPhone {
 userForm = new FormGroup({
    code: new FormControl()
  });
  constructor(sms: SMS) {
  }

  findPhone(){
    console.log(this.userForm.value);
  }

}
