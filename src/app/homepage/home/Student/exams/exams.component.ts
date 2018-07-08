import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../../shared/user.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {


  public exams: Array<any>;

  constructor(private http: HttpClient,private us: UserService, private toastr: ToastrService) { }




  async getExams(){
    return (<Array<any>>await this.http.post(this.us.rootUrl + 'getSubscribedExams', {
      index: localStorage.getItem('un')
    }).toPromise());
  }

  ngOnInit() {
    this.pageLoad();
  }

  async pageLoad(){
    let a2 = this.exams = await this.getExams();
    let h=90;
  }

}
