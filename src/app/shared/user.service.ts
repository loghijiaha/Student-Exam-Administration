import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user.model';
import { Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  rootUrl = 'http://localhost:8082/';
  public  user: User;
  cred: any;
  isLoggedIn: boolean;
  constructor(private http: HttpClient, private router: Router ) {this.user = new  User();
  }

  public getInfo(index, key) {
    return this.http.post(this.rootUrl + 'userInfo', { index: index, key : key });

  }
  public login( username, password) {
    if (username === '' && password === '') {
      alert('Enter your password and username');
      console.log('invalid');
    } else {
      this.http.post(this.rootUrl + 'auth', {index: username, pw: password})
        .subscribe(
          res => {
            this.isLoggedIn = true;
            localStorage.setItem('session', JSON.stringify({index: username, key: res['key']}));
            this.router.navigate(['home']);
          },
          err => {
            console.log('err');
            alert('Try to login next time');
          }
        );
      this.cred = JSON.parse(localStorage.getItem('session'));

      this.getInfo(this.cred['index'], this.cred['key'])
        .subscribe(res => {
          const body = res;
          this.user.FirstName = body['name'];
          this.user.AccountType = body['accountType'];
          this.user.Key = body['key'];
          this.user.UserName = body['un'];
        });
    }
  }
}

