import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ConfirmOrderPage } from '../confirm-order/confirm-order';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  constructor(public navCtrl: NavController) {}

  pay() {
  	this.navCtrl.push(ConfirmOrderPage)
  }

}
