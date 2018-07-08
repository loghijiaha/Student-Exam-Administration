import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../../shared/user.service';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-register-new-student',
  templateUrl: './register-new-student.component.html',
  styleUrls: ['./register-new-student.component.css']
})
export class RegisterNewStudentComponent implements OnInit {
  private index: string;
  private pass: string;
  private batch: string;

  constructor(private http: HttpClient, private service: UserService) {
    this.index = "";
    this.pass = "";
  }
    ngOnInit()
    {
    }

  public async createAccount() {
  console.log(this.index,this.pass)
      if (await this.service.submitAccountDetails(this.pass, 'student', this.index, this.batch)) {
        this.pass = "";
        this.index = "";
      }
//testing required
    }

}
