import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { FCM } from '@ionic-native/fcm';
import { Firebase } from '@ionic-native/firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'WelcomePage';

  pages: Array<any>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private firebase: Firebase) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'Home' , icon: 'md-home' },
      { title: 'Appoinment Dashboard', component: 'DashboardPage' , icon: 'md-apps' },
      { title: 'saved', component: 'Favorite' , icon: 'md-heart' },
      { title: 'Account', component: 'Profile' , icon: 'md-person' },
      { title: 'Settings', component: 'Setting' , icon: 'md-settings' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

//       this.fcm.getToken().then(token=>{
//         // backend.registerToken(token);
//       })

//   this.fcm.onNotification().subscribe(data=>{
//   if(data.wasTapped){
//     console.log("Received in background");
//   } else {
//     console.log("Received in foreground");
//   };
// })

// this.fcm.onTokenRefresh().subscribe(token=>{
//   // backend.registerToken(token);
// })

    this.firebase.getToken()
  .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
  .catch(error => console.error('Error getting token', error));

this.firebase.onTokenRefresh()
  .subscribe((token: string) => console.log(`Got a new token ${token}`));

  this.firebase.onNotificationOpen()
            .subscribe((res) => {
                if (res.tap) {
                    // since firebase sends always string as data you have to parse it
                    console.log('Tap');
                    // this else if is for foreground mode
                    } else if (!res.tap) {
                    // this.navCtr.push(Page)
                    console.log('not Tap');
                    }
            });



    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(page) {
    this.nav.setRoot(page);
  }

  // animate my app Function
  public animateVarible:boolean=true;
}
