import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
	tab1Root: any = HomePage;


  mySelectedIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
