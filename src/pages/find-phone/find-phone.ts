import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SMS } from '@ionic-native/sms';


@Component({
  selector: 'page-find-phone',
  templateUrl: 'find-phone.html',
})
export class FindPhone {
 userForm = new FormGroup({
    contact: new FormControl(),   
    code: new FormControl()
  });
  constructor(private sms: SMS) {
  }

  findPhone(){
    let contactNumber = this.userForm.controls.contact.value,
    code = this.userForm.controls.code.value,
    options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                //intent: 'INTENT'  // send SMS with the native android SMS messaging
                intent: '' // send SMS without open any other app
            }
        };

        this.sms.send(contactNumber, code, options);
  }

}
