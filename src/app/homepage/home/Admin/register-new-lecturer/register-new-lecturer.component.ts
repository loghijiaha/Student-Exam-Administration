import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../shared/user.service';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register-new-lecturer',
  templateUrl: './register-new-lecturer.component.html',
  styleUrls: ['./register-new-lecturer.component.css']
})
export class RegisterNewLecturerComponent implements OnInit {
  index:string
  pass:string
  batch:string

  constructor(private http: HttpClient, private service: UserService, private toastr:ToastrService) { }

  ngOnInit() {
  }

  async createAccount(pass,acType,index){

    if(await this.service.submitAccountDetails(pass,acType,index,this.batch)){
      this.pass = "";
      this.index = "";
      this.toastr.success('','Account Created:Lecturer', {positionClass: 'toast-bottom-right'});
    }
//testing required
  }
}
