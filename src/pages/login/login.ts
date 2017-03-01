import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {}

  register() {
    this.navCtrl.push(RegisterPage);
  }

  doLogin() {
    this.navCtrl.setRoot(HomePage);
  }

}
