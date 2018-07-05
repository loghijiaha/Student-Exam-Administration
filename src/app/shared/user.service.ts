import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user.model';
import { Router} from '@angular/router';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class UserService {
  rootUrl = 'http://localhost:8082/';
  public  user: User;
  cred: any;
  isLoggedIn = false;
  public log = 'Login'
  constructor(private http: HttpClient, private router: Router ) {this.user = new  User();
  }
  get _isLoggedIn(): boolean {
    return this.isLoggedIn;
  }
  public getInfo(index, key) {
    return this.http.post(this.rootUrl + 'userInfo', { index: index, key : key });

  }
  // For student
  public logout() {
    localStorage.removeItem(this.cred['key']);
    this.isLoggedIn = false;
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
            this.user.isLoggedIn = true;
            localStorage.setItem('session', JSON.stringify({index: username, key: res['key']}));
            this.router.navigate(['home']);
            console.log(this.log);
          },
          err => {
            console.log('err');
            alert('Username and Password are not matching');
          }
        );
      this.cred = JSON.parse(localStorage.getItem('session'));
      console.log(this.cred['key']);
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
  public getPastpaper( year) {
    // after implementing api
  }
  public requestForRecorrection() {}
  public requestForRepeat() {}
  public inquries() {}
  // For lecturer
  public putPastpaper(fileToUpload: File, path: string): Observable<boolean> {
    const endpoint = path;
    const formData: FormData = new FormData();
    formData.append('filekey', fileToUpload , fileToUpload.name);
    return this.http.post( endpoint , formData).map(() => { return true} );
  }
}


