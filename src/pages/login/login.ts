import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ConfirmAppointmentPage} from '../confirm-appointment/confirm-appointment'


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //goTo function
  goTo(page){
    this.navCtrl.push(page);
  }

  goToConfirm(){
    localStorage.setItem('userId','1');
    this.navCtrl.pop();
  }

}