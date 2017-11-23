import { Component } from '@angular/core';
// import {DoctorPage} from '../../pages/doctor/doctor';
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the DoctorlistComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'doctorlist',
  templateUrl: 'doctorlist.html'
})
export class DoctorlistComponent {

  text: string;
  doctorList : any;
  constructor(public navCtrl: NavController, public params: NavParams) {
    console.log('Hello DoctorlistComponent Component :: ' + JSON.stringify(params));
    this.text = 'Hello World';
    this.doctorList = params.data;
    localStorage.setItem("clinicLoc",this.doctorList.clinic)
  }
  checkDoctor(doctor){

   // this.navCtrl.push(DoctorPage, doctor);
  }
  closePop(){
    this.navCtrl.pop();
  }

}
