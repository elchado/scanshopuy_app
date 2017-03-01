import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductDetailsPage} from '../product-details/product-details';

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class WishlistPage {

  constructor(public navCtrl: NavController) {}

  openDetails() {
  	this.navCtrl.push(ProductDetailsPage);
  }

}
