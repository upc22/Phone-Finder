import { AlertController } from 'ionic-angular';
import { Component } from '@angular/core';

import { Home } from '../home/home';
import { FindPhone } from '../find-phone/find-phone';
//import { Themes } from '../themes/themes';

@Component({
  selector: "app-tabs",
  templateUrl: 'tabs.html'
})
export class Tabs {

  tabs = {
    home: Home,
    findPhone: FindPhone
  }

  constructor(public alertCtrl: AlertController) {

  }

  chooseTheme() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Choose a Theme');

    alert.addInput({
      type: 'radio',
      label: 'Default',
      value: 'default',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Red',
      value: 'red',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Green',
      value: 'green',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Dark',
      value: 'dark',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log(data);
        // this.testRadioOpen = false;
        // this.testRadioResult = data;
      }
    });
    alert.present();
  }
}

