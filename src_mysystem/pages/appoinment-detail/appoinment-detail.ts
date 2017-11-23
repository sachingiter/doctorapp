import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppoinmentDetailPage');
  }

  goTo(page){
  	this.navCtrl.push(page,this.doctorDetails);
  }

}
