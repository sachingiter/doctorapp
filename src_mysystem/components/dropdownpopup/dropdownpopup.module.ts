import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DropdownpopupComponent } from './dropdownpopup';

@NgModule({
  declarations: [
    DropdownpopupComponent,
  ],
  imports: [
    IonicPageModule.forChild(DropdownpopupComponent),
  ],
  exports: [
    DropdownpopupComponent
  ]
})
export class DropdownpopupComponentModule {}
