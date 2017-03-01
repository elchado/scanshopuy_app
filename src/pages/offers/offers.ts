import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListingsPage } from '../listings/listings';
import { ProductDetailsPage } from '../product-details/product-details';

@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html'
})
export class OffersPage {

  constructor(public navCtrl: NavController) {}

  shop() {
  	this.navCtrl.push(ListingsPage);
  }

  details() {
  	this.navCtrl.push(ProductDetailsPage);
  }

}
