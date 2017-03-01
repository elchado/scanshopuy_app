import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WishlistPage } from '../wishlist/wishlist';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {}

  wishList() {
  	this.navCtrl.push(WishlistPage, {direction: 'forward'});
  }

}
