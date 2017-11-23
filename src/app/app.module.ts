import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DropdownpopupComponent } from '../components/dropdownpopup/dropdownpopup';
import { ServicesProvider } from '../providers/services/services';
import { HomeProvider } from '../providers/home/home';
import { HttpModule } from '@angular/http';
import { DoctorlistComponent } from '../components/doctorlist/doctorlist';
import { Login } from '../pages/login/login';
import{ConfirmAppointmentPage} from '../pages/confirm-appointment/confirm-appointment';
import { Firebase } from '@ionic-native/firebase';
import { AuthService } from '../services/auth.service';

// import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
// import { LimitToDirective } from '../directives/limit-to/limit-to';
// import { ServicesDirective } from '../directives/services/services';

// import { NgCalendarModule  } from 'ionic2-calendar';


var config = {
  backButtonText: '',
  backButtonIcon: 'md-arrow-back',
  modalEnter: 'modal-slide-in',
  modalLeave: 'modal-slide-out',
  tabsPlacement: 'bottom',
  pageTransition: 'md',
  mode:'md'
};

// const cloudSettings: CloudSettings = {
//   'core': {
//     'app_id': 'c2f4c411'
//   }
// };


@NgModule({
  declarations: [
    MyApp,
    DropdownpopupComponent,
    DoctorlistComponent,
    ConfirmAppointmentPage,
    Login
    // LimitToDirective
  ],
  imports: [
    HttpModule,
    BrowserModule,
    // NgCalendarModule,
    IonicModule.forRoot(MyApp,config)
    // CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DropdownpopupComponent,
    DoctorlistComponent,
    ConfirmAppointmentPage,
    Login
  ],
  providers: [
    StatusBar,
    Firebase,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ServicesProvider,
    HomeProvider
  ]
})
export class AppModule {}
