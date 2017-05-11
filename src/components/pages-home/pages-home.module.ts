import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagesHome } from './pages-home';

@NgModule({
  declarations: [
    PagesHome,
  ],
  imports: [
    IonicPageModule.forChild(PagesHome),
  ],
  exports: [
    PagesHome
  ]
})
export class PagesHomeModule {}
