import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import{ConfirmAppointmentPage} from '../confirm-appointment/confirm-appointment'

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class Details {

  save= false;
   doctorData: any = {};
   eventSource:any[]=[];
   isToday: boolean;
    viewTitle;
   calendar = {
        mode: 'month',
        currentDate: new Date()
    };

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
     this.doctorData = this.navParams.data;
     console.log( JSON.stringify(this.doctorData));
  }

    ionViewDidLoad() {
  //  console.log('ionViewDidLoad DoctorPage');
   // calendar.currentDate=new Date();
    this.calendar.currentDate=new Date();
    this.loadEvents();
  }

  loadEvents() {
        this.eventSource = this.createRandomEvents();
    }
   createRandomEvents() {
        var events = [];
        if(this.doctorData != undefined){
           for(let i=0;i<this.doctorData.appointmentTime.length;i++){
            let startTime=new Date(this.doctorData.appointmentTime[i].time);
          events.push({
                    title: 'Appointment Available ',
                    startTime: startTime,
                    endTime: new Date(startTime.getTime()+1000*60*60),
                    allDay: false
                });    
        }
        
         return events;
        }


    }

  onTimeSelected(ev) {
      //  console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
           // (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    }

  onCurrentDateChanged(event:Date) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        // this.todaySlots=[];
        // for(let i=0;i<this.doctorData.appointmentTime.length; i++){
        //     if(i%2 == 0){
        //          this.todaySlots.push({time: this.doctorData.appointmentTime[i]});
        //     }
        // }
           
            // this.todaySlots.push({time:'10:40 AM'})
            // this.todaySlots.push({time:'01:40 PM'})
            // this.todaySlots.push({time:'05:40 PM'})
        this.isToday = today.getTime() === event.getTime();
       
  }

  onEventSelected(value){
        let dateTime = value.startTime;
        //console.log(JSON.stringify(dateTime));
        // this.doctorData.singleTime = value.time.split(" ");
        this.doctorData.date = dateTime.toLocaleDateString();
        this.doctorData.time = dateTime.toLocaleTimeString();
     
       // console.log(dateTime[0] + ' sadfasfsd  ' + dateTime[1] + ' dsfasdfs 88 ' + dateTime[2] );
    

     this.navCtrl.push(ConfirmAppointmentPage, this.doctorData);

    }

   onViewTitleChanged(title) {
     // console.log(title);
        this.viewTitle = title;
    }



  saveDoctor(){
    this.save = !this.save;
  }

// Map modal
  presentMapModal() {
   let mapModal = this.modalCtrl.create('MapModalPage', { userId: 8675309 });
   mapModal.present();
 } 

 // rate modal
  presentRateModal() {
   let rateModal = this.modalCtrl.create('RateModalPage', { userId: 8675309 });
   rateModal.present();
 } 

}