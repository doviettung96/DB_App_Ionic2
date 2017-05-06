import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginService} from '../../providers/login.service';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService],
})

export class Login {
  login_username: string;
  login_password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginService: LoginService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  submit() {
   console.log(this.loginService.login({'login_username': this.login_username, 'login_password': this.login_password}));
  }
}
