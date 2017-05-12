import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { App } from './app.component';
import { Home } from '../pages/home/home';
import { FindPhone } from '../pages/find-phone/find-phone';
import { Themes } from '../pages/themes/themes';
import { Tabs } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    App,
    Home,
    FindPhone,
    Themes,
    Tabs
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    IonicModule.forRoot(App),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    Home,
    FindPhone,
    Themes,
    Tabs
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
