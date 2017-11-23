import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorlistComponent } from './doctorlist';

@NgModule({
  declarations: [
    DoctorlistComponent,
  ],
  imports: [
    IonicPageModule.forChild(DoctorlistComponent),
  ],
  exports: [
    DoctorlistComponent
  ]
})
export class DoctorlistComponentModule {}
