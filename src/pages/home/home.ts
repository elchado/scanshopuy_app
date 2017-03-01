import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { CategoryPage } from '../category/category';
import { OffersPage } from '../offers/offers';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }


 


  openOffer() {
    this.navCtrl.push(OffersPage);
  }
  openWomen() {
  	this.navCtrl.push(CategoryPage);
  }
   cart() {
  	this.navCtrl.push(CartPage);
  }
  

 
}
