import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-address',
  templateUrl: 'address.html'
})
export class AddressPage {

  constructor(public navCtrl: NavController) {}

  payment() {
  	this.navCtrl.push(PaymentPage);
  }

}
