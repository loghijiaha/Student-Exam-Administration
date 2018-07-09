import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../../shared/user.service';

@Component({
  selector: 'app-view-user-inquiries',
  templateUrl: './view-user-inquiries.component.html',
  styleUrls: ['./view-user-inquiries.component.css']
})
export class ViewUserInquiriesComponent implements OnInit {
  dat: {};
  selectedoption: string;
  change:any;
  allModules: Array<any>;

  lists : Array<string>;

  sell:any;
  constructor(private http: HttpClient, private services: UserService) {
  }

  ngOnInit() {
    this.pageLoad();
  }

  async pageLoad() {
    this.allModules = <Array<any>>await this.services.getAllXhams();

  }

  async show(module){
    let res = await this.http.post(this.services.rootUrl+'getRepeatRequests',{
      exam:module
    }).toPromise();

    this.lists = <Array<any>> res;

  }
}
