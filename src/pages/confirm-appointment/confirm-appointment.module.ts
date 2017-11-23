import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmAppointmentPage } from './confirm-appointment';

@NgModule({
  declarations: [
    ConfirmAppointmentPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmAppointmentPage),
  ],
  // exports: [
  //   ConfirmAppointmentPage
  // ]
})
export class ConfirmAppointmentPageModule {}
