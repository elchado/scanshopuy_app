import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html'
})
export class FilterPage {
	isSelected: boolean = false;
	
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {}

  select(el) {
  	console.log(this);
    // if (this.isSelected === false) {
    // 	el.target.className = "selected";
    //   this.isSelected = true;
    // } else {
    // 	el.target.className = "";
    //   this.isSelected = false;
    // }
  }

}
