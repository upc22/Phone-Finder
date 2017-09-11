import { AlertController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'page-themes',
  templateUrl: 'themes.html',
})
export class Themes implements OnInit {

  selectedTheme;
  constructor(public alertCtrl: AlertController) {
  }
  ngOnInit(){
    this.showRadio();
  }
  showRadio() {
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
