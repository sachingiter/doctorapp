import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home } from './home';
import { LimitToDirective } from '../../directives/limit-to/limit-to';

@NgModule({
  declarations: [
    Home,
    LimitToDirective

  ],
  imports: [
    IonicPageModule.forChild(Home),
  ],
  exports: [
    Home
  ]
})
export class HomePageModule {}
