import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';

/*
 Generated class for the Login provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class LoginService {
  DEFAULT_URL: string;

  constructor(public http: Http, private storage: Storage) {
    this.DEFAULT_URL = 'http://localhost/DB_Server/index.php';
  }

  sendPost = function (url, data) {
    let headers = new Headers();
    headers.append("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
    let options = new RequestOptions({headers: headers});
    url = this.DEFAULT_URL + url;

    this.http.post(url, data.toString(), options).subscribe(res => {
      return res.data;
    });
  };

  login = function (data) {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('login_username', data['login_username']);
    urlSearchParams.append('login_password', data['login_password']);

    return this.sendPost('/login/index', urlSearchParams);
  };

  signup = function (data) {
    return this.sendPost('/signup/index', data);
  };

  getUser = function (data) {
    return this.sendPost('/admin/list_user', data);
  };

  editUser = function (data) {
    return this.sendPost('/admin/edit_user', data);
  };
  deeUser = function (data) {
    return this.sendPost('/admin/dee_user', data);
  };

  saveKey = function (value) {
    this.storage.access_key = value;
  };

  getKey = function () {
    return this.storage.access_key;
  };

  deleteKey = function () {
    delete this.storage.access_key;
    delete this.storage.all_games;
    delete this.storage.order;
  };

}
