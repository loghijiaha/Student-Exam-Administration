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
  public log = 'Login'
  constructor(private http: HttpClient, private router: Router ) {this.user = new  User();
  }
  public _isLoggedIn(): boolean {
    return localStorage.getItem('un') != null;
  }
  public getInfo(index, key) {
    return this.http.post(this.rootUrl + 'userInfo', { index: index, key : key });

  }
  // For student
  public logout() {
    localStorage.removeItem('session');
    localStorage.removeItem('key');
    localStorage.removeItem('un');
    console.log('removed');
    this.router.navigate(['login']);
  }
  public async login( username, password) {
    if (username === '' && password === '') {
      alert('Enter your password and username');
      console.log('invalid');
    } else {

      try {
        let res = await this.http.post(this.rootUrl + 'auth', {index: username, pw: password}).toPromise();
        localStorage.setItem('session', JSON.stringify({index: username, key: res['key']}));
        localStorage.setItem('un', username);
        localStorage.setItem('key', res['key']);
        this.router.navigate(['home']);
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
      catch (e) {
        console.log('err');
        alert('Username and Password are not matching');
      }
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
  public async changePass(old,neww) {

    let res = await this.http.post(this.rootUrl + 'changePass', {
      index: localStorage.getItem('un'),
      key: localStorage.getItem('key'),
      old:old,
      new:neww
    }).toPromise();

    if (res['result'] == 200)return true;
    return false;

  }
  public async submitNewModule(batch,select,mCode,title){
    let res = await this.http.post(this.rootUrl + 'createModule', {
      batch:batch,
      select:select,
      mCode:mCode,
      title:title

    }).toPromise();

    if (res['result'] == 200)return true;
    return false;
  }
}


