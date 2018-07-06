import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../../shared/user.service';
import index from '@angular/cli/lib/cli';
import {toPromise} from 'rxjs/operator/toPromise';

@Component({
  selector: 'app-register-new-student',
  templateUrl: './register-new-student.component.html',
  styleUrls: ['./register-new-student.component.css']
})
export class RegisterNewStudentComponent implements OnInit {
  pass:string

  index:string

  constructor(private http: HttpClient, private service: UserService) { }

  ngOnInit() {
  }

  async createAccount(pass,acType,index){

      if(await this.service.submitAccountDetails(pass,acType,index)){
        this.pass = "";
        this.index = "";
      }

  }
}

