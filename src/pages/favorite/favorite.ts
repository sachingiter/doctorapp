import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ShareModal } from '../share-modal/share-modal';


@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class Favorite {

  list: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.list = [{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'},{img: 'assets/img/img1.png'},{img: 'assets/img/img2.png'}];
  }

// remove product qty
  removeItem(item){
    for(var i = 0; i < this.list.length; i++) {
      if(this.list[i] == item){
        this.list.splice(i, 1);
      }
 
    }
  }

// like function
  like(item){
    item.activeLike=!item.activeLike;
  }    

// social media modal
  presentshareModal() {
   let shareModal = this.modalCtrl.create(ShareModal, { userId: 8675309 });
   shareModal.present();
 }

//goTo function
  goTo(page){
    this.navCtrl.push(page);
  }

}
