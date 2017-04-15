import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { ProfilePage } from '../pages/profile/profile';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TutorialPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();
 

  
  this.pages = [
  { title: 'Products', component: HomePage },
  { title: 'My profile', component: ProfilePage },
  { title: 'Scan History', component: WishlistPage }


  ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
    
      StatusBar.overlaysWebView(true);
      StatusBar.backgroundColorByHexString('#271d3f');
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
