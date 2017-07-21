import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IUserRegistration } from '../../services/account-management.service';
import { Logger } from '../../services/logger.service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  public userData: IUserRegistration = {
    username: '',
    password: '',
    givenName: '',
    familyName: '',
    email: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    Logger.banner("Register");
  }

}
