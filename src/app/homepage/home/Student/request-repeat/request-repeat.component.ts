import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../../../../shared/user.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-request-repeat',
  templateUrl: './request-repeat.component.html',
  styleUrls: ['./request-repeat.component.css']
})
export class RequestRepeatComponent implements OnInit {

  public recorrectableExams: Array<any>;

  constructor(private http: HttpClient,private us: UserService, private toastr: ToastrService) { }

  async request(modName: string) {

    await this.http.post(this.us.rootUrl + 'applyRepeat', {
      index: localStorage.getItem('un'),
      exam: modName
    }).toPromise();
    this.toastr.success('', 'Success', {positionClass: 'toast-bottom-right'});



  }


  async getRecorrectableExams(){
    return (<Array<any>>await this.http.post(this.us.rootUrl + 'getRecorrectableExams', {
      index: localStorage.getItem('un')
    }).toPromise()).map(a => a._id);
  }

  ngOnInit() {
    this.pageLoad();
  }

  async pageLoad(){
    let a2 = this.recorrectableExams = await this.getRecorrectableExams();
  }

}
