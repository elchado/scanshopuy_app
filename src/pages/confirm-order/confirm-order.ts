import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-confirm-order',
  templateUrl: 'confirm-order.html'
})
export class ConfirmOrderPage {

  constructor(public navCtrl: NavController) {}

  goHome() {
  	this.navCtrl.setRoot(TabsPage);
  }

}
