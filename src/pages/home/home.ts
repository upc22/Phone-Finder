import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';


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
  constructor(public navCtrl: NavController, private sms: SMS) {
  }

  startService(evt){
    console.log ("hi")
    let filter = {
      box: "inbox",
      indexFrom : 0,
      maxCount : 10
    }
     if(this.sms) {
       console.log("print")
       this.sms.list(filter,data=>{
  
            console.log(data);
            this.smses=data;
       
 
    },error=>{
      console.log(error);
    });
  }
  }


}
