import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Details } from './details';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  declarations: [
    Details,
  ],
  imports: [
   NgCalendarModule,
    IonicPageModule.forChild(Details),
  ],
  exports: [
    Details
  ]
})
export class DetailsModule {}
