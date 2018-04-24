import { Component, OnInit } from '@angular/core';
import {LoginpageComponent} from '../loginpage/loginpage.component';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  userInfo: any;
  cred: any;
  name: string;
  accounttype: any;
  index: any;
  constructor(private http: HttpClient) {  }

  ngOnInit() {
    this.cred = JSON.parse(localStorage.getItem('session'));
    this.getInfo(this.cred['index'], this.cred['key']);
  }
  public getInfo(index, key ) {
    this.http.post('http://10.10.28.98:8082/userInfo', { index: index, key : key })
      .subscribe(
        res => {
          this.userInfo = res;
          console.log(res);
          this.name = this.userInfo['name'];
          this.accounttype = this.userInfo['accountType'];
          this.index = this.userInfo['_id'];
        },
        err => {
          console.log(err);
        }
      );
  }

}
