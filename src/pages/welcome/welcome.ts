import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  	console.log('User type is before  : ' + localStorage.getItem('userType'));
  	
    console.log('ionViewDidLoad WelcomePage');
  }
    //goTo function
  goTo(page,type){
  	console.log('User type is : ' + type);
  	localStorage.setItem('userType',type);
    this.navCtrl.push(page);
  }

  goToConfirm(){
    localStorage.setItem('userId','1');
    this.navCtrl.pop();
  }

}
