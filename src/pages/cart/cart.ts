import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddressPage } from '../address/address';
import { ProductDetailsPage } from '../product-details/product-details';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {

  constructor(public navCtrl: NavController) {}

  order() {
  	this.navCtrl.push(AddressPage);
  }

  openDetails() {
  	this.navCtrl.push(ProductDetailsPage)
  }

}
