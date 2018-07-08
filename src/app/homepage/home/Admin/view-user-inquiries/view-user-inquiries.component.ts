import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../../shared/user.service';

@Component({
  selector: 'app-view-user-inquiries',
  templateUrl: './view-user-inquiries.component.html',
  styleUrls: ['./view-user-inquiries.component.css']
})
export class ViewUserInquiriesComponent implements OnInit {
  inquiries : any;
  rootUrl = 'http://localhost:8082/';

  constructor(public http:HttpClient) {

  }

  ngOnInit() {
    this.getUserInquiries();
  }
  public async getUserInquiries(){
    let result = await this.http.post(this.rootUrl+'getUserInquiries',{}).toPromise();
    this.inquiries= result;
    console.log(result);
  }
}
