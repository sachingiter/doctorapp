import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the AppoinmentDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-appoinment-detail',
  templateUrl: 'appoinment-detail.html',
})
export class AppoinmentDetailPage {
  doctorDetails : any = {
  "providerId": "a-3",
  "provider": "Steve",
  "providerDescription": "Graduated from MIT Medical School",
  "providerServiceSince": "1993",
  "providerReview": "4",
  "location": "10010 H Shops Way, Northborough, MA 01532",
  "appointmentTime": [
    {
      "id": "04a1",
      "time": "2017-10-20T03:00:00"
    }
  ]
};
memberId:any;
AppointmentDate:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppoinmentDetailPage');
    this.appoinmentDetail();
  }

  appoinmentDetail(){
          // this.http.get('https://gsva6pcov8.execute-api.us-east-1.amazonaws.com/dev/api/appointmentDetailsByMember/' + this.memberId + '/' + this.AppointmentDate);
         // this.http.get('https://gsva6pcov8.execute-api.us-east-1.amazonaws.com/dev/api/appointmentDetailsByMember?memberId =' + this.memberId + '&AppointmentDate=' + this.AppointmentDate);
     //          .map(res => res.json())
     //          .subscribe(data => {
     //              // we've got back the raw data, now generate the core schedule data
     //              // and save the data for later reference
                  
     //              // resolve(data);
     //        });
  }

  goTo(page){
  	this.navCtrl.push(page,this.doctorDetails);
  }

}
