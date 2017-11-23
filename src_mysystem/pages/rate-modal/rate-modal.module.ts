import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RateModalPage } from './rate-modal';
// Import ionic2-rating module
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    RateModalPage,
  ],
  imports: [
    IonicPageModule.forChild(RateModalPage),
    Ionic2RatingModule
  ],
  exports: [
    RateModalPage
  ]
})
export class RateModalPageModule {}
