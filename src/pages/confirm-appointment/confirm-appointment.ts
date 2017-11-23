import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Login} from '../login/login';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from '../../services/auth.service';
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
  data:any;
  memberId:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,public auth: AuthService) {
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

    this.data = {

    "memberId": "",
    "memberName": "",
    "providerId": "a3fab897-8b70-4611-9fef-9e60507e2d11",
    "facilityId": "9fa01d93-4ca6-461e-8621-0c569678b67c",
    "appointmentDate": "20171129",
    "appointmentStartTime": "09:00:00",
    "appointmentEndTime": "09:30:00"
    }
    console.log(localStorage.getItem('userId'));
    if(localStorage.getItem('profile')){
      this.http.post('https://gsva6pcov8.execute-api.us-east-1.amazonaws.com/dev/api/addAppointment/providerId/a3fab897-8b70-4611-9fef-9e60507e2d11', this.data)
      .map(res => res.json())
              .subscribe(data => {
                  // we've got back the raw data, now generate the core schedule data
                  // and save the data for later reference
                  
                  // resolve(data);
            });

      this.navCtrl.setRoot('DashboardPage');
    }else {
      this.auth.login();
    }
    
  }


}
