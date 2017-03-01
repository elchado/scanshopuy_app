import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html'
})
export class ProductDetailsPage {
	item: any;
	
  constructor(public navCtrl: NavController) {}

  cart() {
  	this.navCtrl.push(CartPage);
  }

}
