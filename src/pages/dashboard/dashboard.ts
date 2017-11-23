import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})


export class DashboardPage {

  email: string;
  Appoinments:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.getAppoinment();
  }

  getAppoinment(){

     this.http.get('https://gsva6pcov8.execute-api.us-east-1.amazonaws.com/dev/api/getAppointment/memberId/eee12087-e227-4b98-841d-5de9f8593109')
              .map(res => res.json())
              .subscribe(data => {
                this.Appoinments = data;
                  // we've got back the raw data, now generate the core schedule data
                  // and save the data for later reference
                  
                  // resolve(data);
            });


  }

  detail(){
  	this.navCtrl.push('AppoinmentDetailPage');
  }

}
