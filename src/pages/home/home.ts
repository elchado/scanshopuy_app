import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { CategoryPage } from '../category/category';
import { OffersPage } from '../offers/offers';
import { BarcodeScanner } from 'ionic-native';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  


   private barcodeText:String;
   private barcodeFormat:String;
   private platform:Platform; 
   private navController:NavController;

  constructor(public navCtrl: NavController,platform:Platform) {
      this.platform = platform;
      this.navController = navCtrl;
     
  }




  scan(){
      console.log('scannig product barcode');
        this.platform.ready().then(() => {
            BarcodeScanner.scan().then((result) => {
                if (!result.cancelled) {
          this.barcodeText = result.text;
          this.barcodeFormat = result.format;
        }
            }, (error) => {
              console.log('error when scanning product barcode');
                
            });
        });     
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
