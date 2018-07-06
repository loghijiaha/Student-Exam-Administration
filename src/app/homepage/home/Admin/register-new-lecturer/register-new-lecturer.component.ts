import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../shared/user.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register-new-lecturer',
  templateUrl: './register-new-lecturer.component.html',
  styleUrls: ['./register-new-lecturer.component.css']
})
export class RegisterNewLecturerComponent implements OnInit {
  index:string
  pass:string

  constructor(private http: HttpClient, private service: UserService) { }

  ngOnInit() {
  }

  async createAccount(pass,acType,index){

    if(await this.service.submitAccountDetails(pass,acType,index)){
      this.pass = "";
      this.index = "";
    }
//testing required
  }
}
