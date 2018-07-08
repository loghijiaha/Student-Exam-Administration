import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../shared/user.service';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-recorrection-request',
  templateUrl: './recorrection-request.component.html',
  styleUrls: ['./recorrection-request.component.css']
})
export class RecorrectionRequestComponent implements OnInit {

  public recorrectableExams: Array<any>;

  constructor(private http: HttpClient,private us: UserService, private toastr: ToastrService) { }

  async request(modName: string) {

    await this.http.post(this.us.rootUrl + 'applyRecorrection', {
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
