import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalStateService } from '../../services/global-state.service';
import { CognitoUtil }        from '../../services/account-management.service';
import { Login } from '../login/login';
import { Signup } from '../signup/signup';
import { Logger } from '../../services/logger.service';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {
  cognitoUtil = null;

  constructor(public navCtrl: NavController, public globals: GlobalStateService) {
    // hack workaround: instantiation so that the code can be loaded in time for the IonViewDidEnter() method
    this.cognitoUtil = new CognitoUtil();
  }

  ionViewDidEnter() {
    Logger.banner("Bienvenido a Lecolosse!");
  }

  login(){
  this.navCtrl.push(Login);
  }

  signup(){
  this.navCtrl.push(Signup);
  }
}
