import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
 data : any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,  public http: Http) {
  }

  //goTo function
  goTo(page){

  	 // this.http.post('https://gsva6pcov8.execute-api.us-east-1.amazonaws.com/dev/api/addUSer',  this.data)
    //           .map(res => res.json())
    //           .subscribe(data => {
    //               // we've got back the raw data, now generate the core schedule data
    //               // and save the data for later reference
                  
    //               // resolve(data);
    //         });

    			this.navCtrl.push(page);
  }

}