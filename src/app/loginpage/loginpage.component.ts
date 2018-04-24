import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent {
  constructor(public http: HttpClient, public  router: Router) {
  }
  login( username, password) {
    if (username === '' && password === '') {
        alert('Enter your password and username');
        console.log('invalid');
    } else {
      this.http.post('http://localhost:4200/auth', {index: username, pw: password})
        .subscribe(
          res => {
            localStorage.setItem('session', JSON.stringify({index: username, key: res['key']}));
            this.router.navigate(['/home', {index: username, key: res}]);
          },
          err => {
            console.log('err');
            alert('Try to login next time');
          }
        );
    }
   }
  }

