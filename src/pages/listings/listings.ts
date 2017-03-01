import { Component } from '@angular/core';
import { ActionSheetController, ModalController, NavController } from 'ionic-angular';

import { FilterPage } from '../filter/filter';
import { ProductDetailsPage } from '../product-details/product-details';

@Component({
  selector: 'page-listings',
  templateUrl: 'listings.html'
})
export class ListingsPage {

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController) {}

  fav(el) {
  	console.log(el);
  	// if (this.isFavorite === false) {
   //  	el.target.style = "color";
   //    this.isFavorite = true;
   //  } else {
   //  	el.target.className = "";
   //    this.isFavorite = false;
   //  }
  }

  openDetails() {
  	this.navCtrl.push(ProductDetailsPage);
  	// let detailsModal = this.modalCtrl.create(ProductDetailsPage);
  	// detailsModal.present(detailsModal);
  }

  refine() {
  	let filterModal = this.modalCtrl.create(FilterPage);
    filterModal.present(filterModal);
  }

  sortBy() {
  	let actionSheet = this.actionSheetCtrl.create({
	    title: 'SORT BY',
	    buttons: [
	      {
	        text: 'Popularity',
	        handler: () => {
	          console.log('Archive clicked');
	        }
	      },
	      {
	        text: 'New',
	        handler: () => {
	          console.log('Cancel clicked');
	        }
	      },
	      {
	        text: 'Discount',
	        handler: () => {
	          console.log('Cancel clicked');
	        }
	      },
	      {
	        text: 'Price: High - Low',
	        handler: () => {
	          console.log('Cancel clicked');
	        }
	      },
	      {
	        text: 'Price: Low - High',
	        handler: () => {
	          console.log('Cancel clicked');
	        }
	      }
	    ]
	  });
		
		actionSheet.present(actionSheet);
  }

}
