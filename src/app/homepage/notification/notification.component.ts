import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../shared/user.service';
import {MatTabsModule} from '@angular/material/tabs';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  message:string;

  dat:{};
  modules:Array<any>;

  constructor(private http: HttpClient,private us: UserService) { }

  ngOnInit() {
    this.pageLoad();

  }

  async getSubscribedModules(){
    return await this.http.post(this.us.rootUrl + 'getSubscribedModules', {
      index: localStorage.getItem('un')
    }).toPromise();
  }
  async getNotices(m){
    return (await this.http.post(this.us.rootUrl + 'getNotices', {
      index: m
    }).toPromise());
  }

  async pageLoad(){
    this.modules = <Array<any>>await this.getSubscribedModules();
    this.dat ={};
    for(let m of this.modules ){
      let w = await this.getNotices(m);
        this.dat[m] = w||[];
    }
  }

}
