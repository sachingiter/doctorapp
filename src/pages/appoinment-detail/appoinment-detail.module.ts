import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppoinmentDetailPage } from './appoinment-detail';

@NgModule({
  declarations: [
    AppoinmentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AppoinmentDetailPage),
  ],
  exports: [
    AppoinmentDetailPage
  ]
})
export class AppoinmentDetailPageModule {}
