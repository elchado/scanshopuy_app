import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductDetailsPage } from '../product-details/product-details';
import { ListingsPage } from '../listings/listings';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  constructor(public navCtrl: NavController) {}

  openDetails() {
  	this.navCtrl.push(ProductDetailsPage);
  }

  openListings() {
  	this.navCtrl.push(ListingsPage);
  }

}
