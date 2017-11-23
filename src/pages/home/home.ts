import { Component, ViewChild, ElementRef ,NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, Platform, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import {DoctorlistComponent} from '../../components/doctorlist/doctorlist';
import {DropdownpopupComponent} from '../../components/dropdownpopup/dropdownpopup';
import {HomeProvider} from '../../providers/home/home';

declare var google;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  @ViewChild('map') mapElement: ElementRef;
  mylat: any;
  clinicsDataSource: any = [];
  mylong: any;
  showData: any = {};
  zipCode:any;
  insuranceId:any;
  clinicsDataSearch:any = [];
  infoWindow:any;
  doctorList:any = {};

  map: any;
  grid: Array<any>;
  list: Array<any>;
  showbtn: boolean=true;
  markerBounds
  currentdoctor
  showslider
  markers=[{id:1,lat:30.0992836,lng:31.10001939},{id:2,lat:30.0357094,lng:31.2227688}]
  constructor(public platform: Platform,public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public geolocation: Geolocation,public ngZOne:NgZone, public modalCtrl: ModalController, public alertCtrl: AlertController, public homeProvider: HomeProvider) {
    this. grid = [{id:1,img:'assets/img/img1.png'},{id:2,img:'assets/img/img2.png'},{img:'assets/img/img1.png'},{img:'assets/img/img2.png'},{img:'assets/img/img1.png'},{img:'assets/img/img2.png'},
    {img:'assets/img/img1.png'},{img:'assets/img/img2.png'},{img:'assets/img/img1.png'},{img:'assets/img/img2.png'}];

    this.list = [{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'}];
    this.platform.ready().then(() => {
      this.toggleshowbtn()
      console.log(localStorage.getItem('userType'));
      if(localStorage.getItem('userType') == 'patient'){
        this.showPopUp();
      }
      
    })
  }

     
   toggleshowbtn(){
     if(this.showbtn) this.loadMap();
   }
    loadMap(){
      this.markerBounds = new google.maps.LatLngBounds();
      this.geolocation.getCurrentPosition().then((position) => {
  
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
        let mapOptions = {
          center: latLng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
  
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarker()// current
        this.addMarkersToMap()
      }, (err) => {
        console.log(err);
      });
  
    }

      searchZip(){

    //console.log("fasdfsfs : " + this.zipCode.length);
    if(this.zipCode.length >= 5){
        this.homeProvider.getDataForClinicsById(this.insuranceId + '/'+ this.zipCode)
            .then(data => {
                //console.log(JSON.stringify(data));
                this.clinicsDataSearch = data;
                let count = 0;
                let clinicSize = this.clinicsDataSearch.data.length;
                for (let value of this.clinicsDataSearch.data) {
                   count = count+1;
                  // value.latitude = 37.0902 + count;
                  //value.longitude = -95.7129 + count;
                   

                    if(count == clinicSize-1){
                      // let latLng = new google.maps.LatLng(value.latitude, value.longitude);
                       //console.log('sadfasfdsfs'); 
                      this.map.panTo(new google.maps.LatLng(value.latitude,value.longitude));
                      // this.map.setCenter(new google.maps.LatLng(value.latitude, value.longitude));  
                    }
                    this.addMarkerOldApp( value.latitude,value.longitude,value);
                    
                }
            })
    }
  }
    
    addMarker(){
      var icon = {
        url: "assets/img/pin.png", // url
        scaledSize: new google.maps.Size(25, 25), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      };
      var markerdata ={
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: this.map.getCenter()
          ,icon:icon 
      }
      let marker = new google.maps.Marker(markerdata);
      marker.setMap(this.map);
      this.markerBounds.extend( this.map.getCenter());
    }
  
    addMarkersToMap() {
        // for(let item of this.markers) {
        //     var icon = {
        //         url: "assets/img/marker.png", // url
        //         scaledSize: new google.maps.Size(20, 20), // scaled size
        //         origin: new google.maps.Point(0,0), // origin
        //         anchor: new google.maps.Point(0, 0) // anchor
        //     };

        //     // var position = new google.maps.LatLng(item.lat, item.lng); 
        //     // var markerdata={position: position,icon:icon, title: item.id.toString()}
        //     // var marker = new google.maps.Marker(markerdata);
        //     // marker.setMap(this.map);
        //     // this.markerBounds.extend(position);
        //     // this.addInfoWindowToMarker(marker)
        // }
        this.map.fitBounds(this.markerBounds);
        this.map.setCenter(this.markerBounds.getCenter());
    }
 
   addInfoWindowToMarker(marker){
      marker.addListener('click', () => {
        
        //  this.ngZOne.run(()=>{
        //  if(!this.showslider)this.showslider=true
        //  this.currentdoctor=marker.title
        // });         
      })
    }


 addMarkerOldApp(lat,long,data) {
      //debugger;

      let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(lat, long),
          customInfo: data
      });
      this.addInfoWindow(marker, "");
    
      //
      var input = document.getElementById('pac-input');
      //  var searchBox = new google.maps.places.SearchBox(input);
      this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
   
  }

  closeDoctorList(){
     this.showslider=false;  
  }

  addInfoWindow(marker, content) {
    //this.map.setOnInfoWindowClickListener(this);
     
    
    google.maps.event.addListener(marker, 'click', () => {

      if(this.infoWindow){
        
       this.infoWindow.close(); 
       this.showslider=false;  
      }
     
      if(this.showData.clinicId!=marker.customInfo.clinicId){

      
        this.showData = marker.customInfo;
        console.log(JSON.stringify(this.showData));
        this.infoWindow = new google.maps.InfoWindow({
            content: "<div style='width:200px;height:100px'><img style='width:40px' src='assets/adam.jpg' /><p class='info-name'>" + this.showData.clinic + "</p><p class='info-name1'>" + this.showData.notes + "</p><button id='xyz' class='btn-dsgn'>make appointment</button></div>"
        });
        //console.log(JSON.stringify(this.showData));
        this.infoWindow.open(this.map, marker);

    google.maps.event.addListener(this.infoWindow, 'domready', () => {
      //now my elements are ready for dom manipulation
      var clickableItem = document.getElementById('xyz');
      clickableItem.addEventListener('click', () => {
        // this.goToProductPage(product);
        // alert();
        localStorage.setItem("clinicLoc",this.showData.clinic)
       this.ngZOne.run(()=>{
             if(!this.showslider){
               // this.showData
               this.showslider=true;
               this.doctorList = this.showData.provider;
           
            }else {
               // this.showslider=false;
            }     

        }); 




       // let doctorList= this.modalCtrl.create(DoctorlistComponent, this.showData);
       //  doctorList.present()

        // this.navCtrl.push(DoctorPage, this.showData);
      });
    });
       }

    });
  
    
   
  }



      showPopUp() {

    let dropDownModal = this.modalCtrl.create(DropdownpopupComponent);
    dropDownModal.onDidDismiss(data => {
       //console.log(data);
       if(data){
             this.insuranceId = data;
        this.homeProvider.getDataForClinicsById(data)
            .then(data => {

                //console.log( 'getData For Clinic : *** '+ JSON.stringify(data));
                this.clinicsDataSource = data;
                let countlat = 0, countlong = 0,countCameraMove = 0;
                let clinicSize = this.clinicsDataSource.data.length;
                for (let value of this.clinicsDataSource.data) {
                  
                 // value.latitude = 37.0902 + countlat;
                  //value.longitude = -95.7129 + countlong;
                  countlat = countlat +1;
                  countlong = countlong +1;
                  countCameraMove = countCameraMove+1;

                    if(countCameraMove == clinicSize-1){
                      // let latLng = new google.maps.LatLng(value.latitude, value.longitude);
                       // //console.log('sadfasfdsfs'); 
                     // this.map.panTo(new google.maps.LatLng( value.latitude,value.longitude));
                      // this.map.setCenter(new google.maps.LatLng(value.latitude, value.longitude));  
                    }



                  //console.log('lat and long : ' + value.latitude + '  ' + value.longitude);
                    

                    this.addMarkerOldApp( value.latitude,value.longitude,value);
                }
            })
       }else {
              // this.insuranceId = data;
        this.homeProvider.getDataForAllClinics()
            .then(data => {

                //console.log( 'getData All Clinic : '+ JSON.stringify(data));
                this.clinicsDataSource = data;
                 let countlat = 1, countlong = 1,countCameraMove = 0;
                let clinicSize = this.clinicsDataSource.data.length;
                for (let value of this.clinicsDataSource.data) {
                 
                    if(countCameraMove == clinicSize-1){
                      // let latLng = new google.maps.LatLng(value.latitude, value.longitude);
                       // //console.log('sadfasfdsfs'); 
                     //this.map.panTo(new google.maps.LatLng(value.latitude, value.longitude));
                      // this.map.setCenter(new google.maps.LatLng(value.latitude, value.longitude));  
                    }

                  //console.log('lat and long : ' + value.latitude + '  ' + value.longitude);
                    

                    // this.addMarker(value.latitude, value.longitude,value);
                }
            })
       }

    
   });
    dropDownModal.present();
  }


// like function
  like(item){
    item.activeLike=!item.activeLike;
  }  

  like2(item){
    item.activeLike2=!item.activeLike2;
  }

// Saved function
  SaveDoctor(item){
    item.save = !item.save;
  }

  SaveDoctor2(item){
    item.save2 = !item.save2;
  }

// social media modal
  presentshareModal() {
   let shareModal = this.modalCtrl.create('ShareModal', { userId: 8675309 });
   shareModal.present();
 }  

//goTo function
  goTo(page, data){
    this.navCtrl.push(page, data);
  }

}