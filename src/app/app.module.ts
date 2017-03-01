import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { OffersPage } from '../pages/offers/offers';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { CartPage } from '../pages/cart/cart';
import { ProfilePage } from '../pages/profile/profile';
import { CategoryPage } from '../pages/category/category';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { ListingsPage } from '../pages/listings/listings';
import { FilterPage } from '../pages/filter/filter';
import { AddressPage } from '../pages/address/address';
import { PaymentPage } from '../pages/payment/payment';
import { ConfirmOrderPage } from '../pages/confirm-order/confirm-order';

@NgModule({
  declarations: [
    MyApp,
    TutorialPage,
    LoginPage,
    RegisterPage,
    TabsPage,
    HomePage,
    OffersPage,
    WishlistPage,
    CartPage,
    ProfilePage,
    CategoryPage,
    ProductDetailsPage,
    ListingsPage,
    FilterPage,
    AddressPage,
    PaymentPage,
    ConfirmOrderPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TutorialPage,
    LoginPage,
    RegisterPage,
    TabsPage,
    HomePage,
    OffersPage,
    WishlistPage,
    CartPage,
    ProfilePage,
    CategoryPage,
    ProductDetailsPage,
    ListingsPage,
    FilterPage,
    AddressPage,
    PaymentPage,
    ConfirmOrderPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {

 

}