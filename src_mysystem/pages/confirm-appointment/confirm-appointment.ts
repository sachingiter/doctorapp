import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Login} from '../login/login';
/**
 * Generated class for the ConfirmAppointmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-confirm-appointment',
  templateUrl: 'confirm-appointment.html',
})
export class ConfirmAppointmentPage {

  doctorData: any = {};
  dateTime : string;
  date : string;
  time : string;
  place:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     console.log(JSON.stringify(this.navParams));
     this.doctorData = this.navParams.data;
     // this.date = this.navParams.data.date;
     // console.log(this.navParams.data.singleTime);
     // console.log(this.dateTime[0] + ' sadfasfsd  ' + this.dateTime[1] + ' dsfasdfs 88 ' + this.dateTime[2] );
     // this.date = this.dateTime[0];
     // this.time = this.dateTime[1];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
    this.place=localStorage.getItem('clinicLoc');
  }

  closePop(){
  	//alert('adfssdf');
    this.navCtrl.pop();
  }

  confirmAppoinment(){
    console.log(localStorage.getItem('userId'));
    if(localStorage.getItem('userId')){
      this.navCtrl.setRoot('DashboardPage');
    }else {
      this.navCtrl.push(Login);
    }
    
  }


}
