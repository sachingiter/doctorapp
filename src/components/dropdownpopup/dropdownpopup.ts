import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController } from 'ionic-angular';
import {ServicesProvider} from '../../providers/services/services';

/**
 * Generated class for the DropdownpopupComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'dropdownpopup',
  templateUrl: 'dropdownpopup.html'
})
export class DropdownpopupComponent {

  text: string;
  isChecked:boolean=false;
  insurance:string="";
  isCheckBoxDisabled:boolean=false;
  isSelectDisabled:boolean=false;
  insuranceList : any;
  insuranceList1 : any [];
  
  constructor(
    public viewCtrl : ViewController,
    public services: ServicesProvider
  ) {
    console.log('Hello DropdownpopupComponent Component');
    this.text = 'Hello World';
  }
  ionViewDidLoad() {
    this.getAllInsurances();
  }
  dismiss() {
  if(this.isSelectDisabled||this.isCheckBoxDisabled){

    this.viewCtrl.dismiss(this.insurance);
  }else{
  alert("choose one option to proceed");
  }
  }
  checkBoxFun(){
  if(this.isChecked){
  this.isSelectDisabled=true;
  }else{
  this.isSelectDisabled=false;
  }
  }
  selectChange(){
if(this.insurance){
this.isCheckBoxDisabled=true;
  }else{
  this.isCheckBoxDisabled=false;
  }
}
getAllInsurances(){
  this.services.getInsurances()
  .then(data=>{
    this.insuranceList = data;
    this.insuranceList1 = this.insuranceList.data[0].insurance;
    console.log(this.insuranceList1);
  })
}

}
