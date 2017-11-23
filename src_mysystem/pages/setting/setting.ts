import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';


@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class Setting {

public action = false;

 constructor(public _myApp:MyApp,public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
   this.action = this._myApp.animateVarible;
 }

// animate Function
  public checkbox;
  animateApp(e:any){ 
    this._myApp.animateVarible = e.checked;
    this.action = this._myApp.animateVarible;
  }

//goTo function
  goTo(page){
    this.navCtrl.push(page);
  }

}