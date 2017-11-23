import { Component, ViewChild, ElementRef ,NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


declare var google;
@IonicPage()
@Component({
  selector: 'page-map-modal',
  templateUrl: 'map-modal.html',
})
export class MapModalPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  markerBounds
  markers=[{id:1,lat:30.0992836,lng:31.10001939}]

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public geolocation: Geolocation,public ngZOne:NgZone) {
    this.ionViewLoaded();
  }

  ionViewLoaded(){
    this.loadMap();
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
        for(let item of this.markers) {
            var icon = {
                url: "assets/img/marker.png", // url
                scaledSize: new google.maps.Size(20, 20), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(0,0) // anchor
            };

            var position = new google.maps.LatLng(item.lat, item.lng); 
            var markerdata={position: position,icon:icon, title: item.id.toString()}
            var marker = new google.maps.Marker(markerdata);
            marker.setMap(this.map);
            this.markerBounds.extend(position);
            this.addInfoWindowToMarker(marker)
        }
        this.map.fitBounds(this.markerBounds);
        this.map.setCenter(this.markerBounds.getCenter());
    }
 
   addInfoWindowToMarker(marker){
      marker.addListener('click', () => {      
      })
    }


  close() {
    this.viewCtrl.dismiss(); // This works fine
  }

}